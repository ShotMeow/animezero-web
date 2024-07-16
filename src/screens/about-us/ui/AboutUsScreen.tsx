import type { FC } from "react";
import TitleBlock from "@/shared/ui/TitleBlock";

import Apple from "@/shared/assets/icons/apple.svg";
import PlayMarket from "@/shared/assets/icons/play-market.svg";

const AboutUsScreen: FC = () => {
  return (
    <main className="container my-16 space-y-10 md:my-32">
      <TitleBlock breadcrumbs="О проекте">
        <h1 className="text-4xl">Преимущества</h1>
        <p className="font-light text-zinc-400">
          AnimeZero - один из самых крупнейших онлайн-кинотеатров в России,
          посвященных аниме. <br /> Мы успешно работаем с 2024 года.
        </p>
      </TitleBlock>
      <article className="space-y-4">
        <h2 className="text-2xl">Огромный выбор фильмов и сериалов</h2>
        <p className="font-light text-zinc-400">
          В нашем каталоге вы найдете огромную коллекцию аниме фильмов и
          сериалов с большим выбором озвучки и хорошим качеством
          воспроизведения. Для вас мы ежедневно работаем над улучшением нашего
          сервиса, чтобы принести в каждый дом уютную атмосферу и удобный
          просмотр аниме.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xl font-bold">
          <p>Ultra HD 4K</p>
          <p className="rounded-lg bg-purple px-2 py-1">HDR</p>
          <p>Full HD</p>
        </div>
      </article>
      <article className="space-y-4">
        <h2 className="text-2xl">
          Доступность просмотра аниме на любой платформе
        </h2>
        <p className="font-light text-zinc-400">
          Наш сервис работает на большинстве существующих платформах, в том
          числе на телевизорах с функцией Smart TV (Samsung, Sony, LG, Heier, и
          другие популярные модели) и на мобильных устройствах (Android и iOS).
          Мы постоянно следим за развитием платформ и стараемся сделать просмотр
          аниме максмально доступным. Смотрите аниме там, где вам удобно.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 px-4 py-2 text-left text-xs font-light transition-colors hover:bg-purple max-sm:w-full">
            <Apple />
            <span className="text-right leading-3">
              Загрузить в <br />
              <span className="text-base font-semibold">App Store</span>
            </span>
          </button>
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 px-4 py-2 text-left text-xs font-light transition-colors hover:bg-purple max-sm:w-full">
            <PlayMarket />
            <span className="text-right leading-3">
              Доступно в <br />
              <span className="text-base font-semibold">Google Play</span>
            </span>
          </button>
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 px-4 py-2 text-left text-xs font-light transition-colors hover:bg-purple max-sm:w-full">
            <span className="text-lg font-black">TV+</span>
            <span className="text-right leading-3">
              Смотреть на <br />
              <span className="text-base font-semibold">Smart TV</span>
            </span>
          </button>
        </div>
      </article>
    </main>
  );
};

export default AboutUsScreen;
