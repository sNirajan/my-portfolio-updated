"use client";

import Navbar from "../components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>Nirajan Shah</title>
        <meta name="description" content="Nirajan Shah - Full-Stack Developer based in Winnipeg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Satoshi:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
