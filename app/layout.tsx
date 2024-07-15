import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "@/src/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeZero",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
