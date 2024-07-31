
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-28 flex items-center justify-center">{children}</div>;
}
