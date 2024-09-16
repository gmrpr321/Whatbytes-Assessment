import { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="w-[100%] h-[100%]">
      <head>
        <title>WhatBytes Assessment</title>
      </head>
      <body className="w-[100%] h-[100%]">
        <div style={{ width: "800px", margin: "auto" }}></div>
        {children}
      </body>
    </html>
  );
}
