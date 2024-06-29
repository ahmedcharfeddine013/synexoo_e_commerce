import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
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
        <Nav />
        <div>{children}</div>
        <Footer />
      </AuthProvider>
    </main>
  );
}
