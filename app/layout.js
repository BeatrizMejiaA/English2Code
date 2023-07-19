"use client";

import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "English to code",
  description: "Created by LeticiaM",
};

export default function RootLayout({ children }) {
  return (

    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
