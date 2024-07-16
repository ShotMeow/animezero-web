import type { FC } from "react";
import Button from "@/src/shared/ui/Button";
import { Play } from "lucide-react";
import UsersCount from "./UsersCount";

const Hero: FC = () => {
  return (
    <section className="flex h-screen items-center">
      <div className="space-y-6">
        <p className="text-zinc-400">
          <span className="border-b-2 border-purple font-bold text-white">
            Anime Zero
          </span>{" "}
          / Каталог
        </p>
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
          <div className="flex items-center gap-4">
            <div className="relative flex size-2 items-center justify-center">
              <span className="absolute size-full rounded-full bg-purple" />
              <span className="absolute -z-10 size-full animate-ping rounded-full bg-purple" />
            </div>
            <UsersCount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
