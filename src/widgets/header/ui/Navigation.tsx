"use client";
import type { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import { navigationItems } from "../constants/navigationItems.data";
import urlPathnameIncluding from "../utils/urlPathnameIncluding";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Navigation: FC<Props> = ({ ...props }) => {
  const pathname = usePathname();

  return (
    <nav {...props}>
      <ul className="flex items-center">
        {navigationItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={clsx(
                "inline-block border-purple p-4 font-light transition-colors",
                {
                  "bg-white/5 border-b-2": urlPathnameIncluding(
                    item.url,
                    pathname,
                  ),
                },
              )}
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
