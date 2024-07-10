import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { Navbar } from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/UserContext";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AuthProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </AuthProvider>
    </main>
  );
}
