"use client";
import { type FC, type HTMLAttributes, useRef, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { navigationItems } from "../constants/navigationItems.data";
import urlPathnameIncluding from "../utils/urlPathnameIncluding";
import getIconFromNav from "../utils/getIconFromNav";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Menu: FC<Props> = ({ className, ...props }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <nav
      className={clsx(
        "container fixed inset-x-0 bottom-4 overflow-x-auto",
        className,
      )}
      {...props}
    >
      <ul className="flex items-center gap-4 rounded-full">
        {navigationItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={clsx(
                "flex w-36 items-center justify-center gap-2 rounded-full bg-white/5 p-4 font-light",
                {
                  "border-2 border-purple": urlPathnameIncluding(
                    item.url,
                    pathname,
                  ),
                },
              )}
            >
              {getIconFromNav(item)}
              {item.name}
            </Link>
          </li>
        ))}
        <li className="pr-8 sm:hidden">
          <input
            type="text"
            title="Поиск"
            className="peer pointer-events-none absolute size-0 opacity-0"
            ref={inputRef}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className={clsx(
              "flex w-36 items-center justify-center gap-2 rounded-full bg-white/5 p-4 font-light peer-focus:border-2 peer-focus:border-purple",
            )}
            onClick={focusInput}
          >
            <Search />
            Поиск
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
