"use client";
import {
  type FC,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { navigationLinksData } from "@/src/shared/constants/navigationLinks.data";
import urlPathnameIncluding from "@/src/shared/utils/urlPathnameIncluding";
import getIconFromNavItemName from "../utils/getIconFromNavItemName";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Menu: FC<Props> = ({ className, ...props }) => {
  const [hide, setHide] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchInputShown, setSearchInputShown] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();

  const focusInput = () => {
    setSearchInputShown(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setHide(isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "container fixed inset-x-0 bottom-0 py-4 transition-transform duration-500",
        {
          "translate-y-32": hide,
        },
        className,
      )}
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
        {navigationLinksData.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              scroll={false}
              className={clsx(
                "flex w-36 items-center justify-center gap-2 rounded-full border-2 bg-zinc-900 p-4 font-light transition-transform duration-500 active:scale-95",
                {
                  "border-zinc-700": !urlPathnameIncluding(item.url, pathname),
                  "border-purple scale-95": urlPathnameIncluding(
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
              "flex w-36 items-center justify-center gap-2 rounded-full border-2 bg-zinc-900 p-4 font-light transition-transform duration-500 active:scale-95",
              {
                "border-zinc-700": !searchInputShown,
                "border-purple scale-95": searchInputShown,
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
