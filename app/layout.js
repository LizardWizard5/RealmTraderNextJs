"use client";

// Removed the CSS import: import "@nextui-org/react/styles.css";
import localFont from "next/font/local";
import "./globals.css"; // Tailwind + custom global styles
import Header from "./header";
import Footer from "./footer";
import { SessionProvider } from "next-auth/react";
import '@fontsource/inter';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          <SessionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </SessionProvider>

      </body>
    </html>
  );
}
