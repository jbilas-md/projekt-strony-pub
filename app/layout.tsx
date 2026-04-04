import "./global.css";
import type { Metadata } from "next";;
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-nova-bg text-nova-dark selection:bg-nova-blue selection:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}