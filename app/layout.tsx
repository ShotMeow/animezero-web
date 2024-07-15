import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header, Menu } from "@/src/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeZero",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Menu className="lg:hidden" />
      </body>
    </html>
  );
};

export default Layout;
