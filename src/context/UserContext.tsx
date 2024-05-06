import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
  address: Address;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
  loading: false,
  error: null,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const userData: User[] = await response.json();

      const foundUser = userData.find((u) => u.username === username);

      if (foundUser) {
        if (foundUser.password === password) {
          setUser(foundUser);
          localStorage.setItem("user", JSON.stringify(foundUser));
          router.push("/");
        } else {
          setError("Invalid password");
        }
      } else {
        setError("User not found");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
