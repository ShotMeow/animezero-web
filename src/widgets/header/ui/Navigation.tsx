"use client";
import type { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import { navigationLinksData } from "@/shared/constants/navigationLinks.data";
import urlPathnameIncluding from "@/shared/utils/urlPathnameIncluding";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Navigation: FC<Props> = ({ className, ...props }) => {
  const pathname = usePathname();

  return (
    <nav className={clsx("h-full", className)} {...props}>
      <ul className="flex h-full items-center">
        {navigationLinksData.map((item) => (
          <li className="h-full" key={item.url}>
            <Link
              href={item.url}
              className={clsx(
                "inline-flex h-full items-center justify-center border-purple px-4 font-light transition-colors",
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
