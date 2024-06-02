import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { NavbarDemo } from "@/components/Shared/NavbarDemo";
import FooterCard from "./(root)/_homepage-components/FooterCard";
import { NotificationProvider } from "@/components/provider/NotificationContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miten | Full Stack Web Developer",
  description: "Explore the portfolio of Miten Patel, a skilled Full Stack Developer specializing in modern web application development. Discover projects, skills, and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <NotificationProvider>
          <NavbarDemo />
          {children}
        </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
