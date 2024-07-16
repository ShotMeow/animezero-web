import Link from "next/link";
import type { FC } from "react";

import { navigationLinksData } from "@/shared/constants/navigationLinks.data";
import { otherLinksData } from "@/shared/constants/otherLinks.data";
import { socialLinksData } from "@/shared/constants/socialLinks.data";

const Footer: FC = () => {
  return (
    <footer className="space-y-16 bg-zinc-900 py-8">
      <div className="container flex flex-wrap gap-10 sm:gap-20 xl:gap-40">
        <figure className="space-y-2">
          <figcaption className="text-lg">Разделы</figcaption>
          <ul className="ml-6 list-disc space-y-1 text-sm font-light text-zinc-300">
            {navigationLinksData.map((item) => (
              <li key={item.url}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </figure>
        <figure className="space-y-2">
          <figcaption className="text-lg">Пользователям и партнёрам</figcaption>
          <ul className="space-y-1 text-sm font-light text-zinc-300">
            {otherLinksData.map((item) => (
              <li key={item.url}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </figure>
        <figure className="space-y-2">
          <figcaption className="text-lg">Мы в социальных сетях</figcaption>
          <ul className="flex gap-2 text-sm font-light text-zinc-300">
            {socialLinksData.map((item) => (
              <li key={item.url}>
                <Link
                  className="flex size-8 items-center justify-center rounded-sm bg-zinc-800 transition-colors hover:bg-purple"
                  href={item.url}
                  aria-label={item.name}
                  target="_blank"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </figure>
      </div>
      <p className="text-center text-sm text-zinc-500">
        © 2024 AnimeZero. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
