"use client";
import type { FC } from "react";
import Link from "next/link";

import { navigationItems } from "../constants/navigationItems.data";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const urlPathnameIncluding = (url: string, pathname: string) => {
  return url.split("/")[1] === pathname.split("/")[1];
};

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center">
        {navigationItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={clsx("font-light inline-block px-4 py-4", {
                "bg-white/5 border-b-2 border-purple": urlPathnameIncluding(
                  item.url,
                  pathname,
                ),
              })}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
