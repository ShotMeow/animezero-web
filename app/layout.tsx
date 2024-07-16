import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

import "./globals.css";
import { Header } from "@/src/widgets/header";
import { Menu } from "@/src/widgets/menu";
import { Footer } from "@/src/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeZero",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={clsx("flex flex-col justify-between", inter.className)}>
        <div className="h-full">
          <Header />
          {children}
          <Menu className="lg:hidden" />
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
