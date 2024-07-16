import type { FC } from "react";
import { Play } from "lucide-react";

import Button from "@/shared/ui/Button";
import TitleBlock from "@/shared/ui/TitleBlock";
import { UsersCount } from "@/features/active-users-count";

const Hero: FC = () => {
  return (
    <section className="relative flex h-[calc(100vh-64px)] items-center">
      <TitleBlock className="container" breadcrumbs="Каталог">
        <h1 className="text-4xl">
          Смотрите онлайн <br /> фильмы на Anime
          <span className="text-purple">Zero</span>
        </h1>
        <p className="font-light text-zinc-400">
          Смотрите фильмы в хорошем качестве <br /> только у нас!
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <Play size={16} />
            Перейти к просмотру
          </Button>
          <UsersCount />
        </div>
      </TitleBlock>
      <video
        className="absolute -z-10 size-full object-cover opacity-5"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/video-playback-4k.webm"
          media="(min-width: 4096px)"
          type="video/webm"
        />
        <source
          src="/videos/video-playback-2k.webm"
          media="(min-width: 2048px)"
          type="video/webm"
        />
        <source
          src="/videos/video-playback-fullhd.webm"
          media="(min-width: 1080px)"
          type="video/webm"
        />
        <source src="/videos/video-playback-hd.webm" type="video/webm" />
      </video>
    </section>
  );
};

export default Hero;
