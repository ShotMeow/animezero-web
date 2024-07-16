import type { FC } from "react";
import { navigationLinksData } from "@/src/shared/constants/navigationLinks.data";
import Link from "next/link";
import { otherLinksData } from "@/src/shared/constants/otherLinks.data";
import { socialLinksData } from "@/src/shared/constants/socialLinks.data";

const Footer: FC = () => {
  return (
    <footer className="space-y-16 bg-zinc-900 py-8">
      <div className="container flex flex-wrap gap-10 sm:gap-20 xl:gap-40">
        <div className="space-y-2">
          <h3 className="text-lg">Разделы</h3>
          <ul className="ml-6 list-disc space-y-1 text-sm font-light text-zinc-300">
            {navigationLinksData.map((item) => (
              <li key={item.url}>
                <Link href={item.url} scroll={false}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg">Пользователям и партнёрам</h3>
          <ul className="space-y-1 text-sm font-light text-zinc-300">
            {otherLinksData.map((item) => (
              <li key={item.url}>
                <Link href={item.url} scroll={false}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg">Мы в социальных сетях</h3>
          <ul className="flex gap-2 text-sm font-light text-zinc-300">
            {socialLinksData.map((item) => (
              <li key={item.url}>
                <Link
                  className="flex size-8 items-center justify-center rounded-sm bg-zinc-800 transition-colors hover:bg-purple"
                  href={item.url}
                  target="_blank"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-zinc-500">
        © 2024 AnimeZero. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
