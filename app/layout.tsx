import type { Metadata } from "next";
import "./globals.css";
import { BricolageGrotesque } from "./fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const APP_NAME = "App Title";
const APP_DESCRIPTION = "Description Here";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BricolageGrotesque.className} flex flex-col min-h-screen antialiased`}
      >
        <Navbar />
        <section className="flex-grow mx-auto w-full items-center justify-center">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
