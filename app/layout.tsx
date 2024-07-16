import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

import "@/app/styles/globals.css";

import { Header } from "@/widgets/header";
import { Menu } from "@/widgets/menu";
import { Footer } from "@/widgets/footer";

import { SocketProvider } from "@/features/active-users-count";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeZero",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={clsx("flex flex-col justify-between", inter.className)}>
        <SocketProvider>
          <div>
            <Header />
            {children}
            <Menu className="lg:hidden" />
          </div>
          <Footer />
        </SocketProvider>
      </body>
    </html>
  );
};

export default Layout;
