"use client";
import { type FC, type HTMLAttributes, useRef, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { navigationItems } from "../constants/navigationItems.data";
import urlPathnameIncluding from "../utils/urlPathnameIncluding";
import getIconFromNavItemName from "../utils/getIconFromNavItemName";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Menu: FC<Props> = ({ className, ...props }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchInputShown, setSearchInputShown] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();

  const focusInput = () => {
    setSearchInputShown(true);
    inputRef.current?.focus();
  };

  return (
    <nav
      className={clsx("container fixed inset-x-0 bottom-4", className)}
      {...props}
    >
      <input
        type="text"
        title="Поиск"
        className={clsx(
          "peer absolute inset-x-0 -top-14 mx-8 scale-100  rounded-md bg-zinc-900 px-4 py-2 font-light transition-all placeholder:text-sm placeholder:text-zinc-300",
          {
            "opacity-0 pointer-events-none scale-0": !searchInputShown,
          },
        )}
        placeholder="Популярные новинки"
        tabIndex={-1}
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onBlur={() => setSearchInputShown(false)}
      />
      <ul className="flex items-center gap-4 overflow-x-auto pb-3">
        {navigationItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={clsx(
                "flex w-36 items-center justify-center gap-2 rounded-full bg-zinc-900 p-4 font-light transition-transform duration-500 active:scale-95",
                {
                  "border-2 border-purple scale-95": urlPathnameIncluding(
                    item.url,
                    pathname,
                  ),
                },
              )}
            >
              {getIconFromNavItemName(item)}
              {item.name}
            </Link>
          </li>
        ))}
        <li className="sm:hidden">
          <button
            className={clsx(
              "flex w-36 items-center justify-center gap-2 rounded-full bg-zinc-900 p-4 font-light transition-transform duration-500 active:scale-95",
              {
                "border-2 border-purple scale-95": searchInputShown,
              },
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
