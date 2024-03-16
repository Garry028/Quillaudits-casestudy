import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Jost } from "next/font/google";
import Footer from "./_components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quill Audits",
  description: "Quill Audits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
