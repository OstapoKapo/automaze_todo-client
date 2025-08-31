import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/header";
import Query from "./components/layout/QueryClient/QueryClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To-Do App",
  description: "A simple to-do app built with Next.js for practice task.",
  openGraph: {
    title: "Dashboard - Todo App",
    description: "Manage your tasks efficiently",
    url: "https://my-todo-app.com/dashboard",
    images: ["https://my-todo-app.com/og-image.png"],
    type: "website",
  },
  keywords: ["todo", "tasks", "productivity"],
  icons: {
    icon: "/icons/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${montserrat.variable} antialiased`}>
         <Query>
          <Header />
          {children}
        </Query>
      </body>
    </html>
  );
}
