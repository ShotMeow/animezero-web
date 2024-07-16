import type { FC } from "react";
import { Play } from "lucide-react";

import Button from "@/shared/ui/Button";
import TitleBlock from "@/shared/ui/TitleBlock";
import { UsersCount } from "@/features/active-users-count";

const Hero: FC = () => {
  return (
    <section className="flex h-[calc(100vh-64px)] items-center">
      <TitleBlock breadcrumbs="Каталог">
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
    </section>
  );
};

export default Hero;
