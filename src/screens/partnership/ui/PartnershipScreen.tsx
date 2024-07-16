import type { FC } from "react";
import Button from "@/shared/ui/Button";
import TitleBlock from "@/shared/ui/TitleBlock";
import Link from "next/link";

const PartnershipScreen: FC = () => {
  return (
    <main className="container my-16 md:my-32">
      <TitleBlock breadcrumbs="Сотрудничество">
        <h1 className="text-4xl">Партнерам</h1>
        <p className="font-light text-zinc-400">
          Наш кинотеатр всегда рад новым партнерам. За поддержку нашего портала
          мы будем рады <br /> предоставить эксклюзивные предложения и надежные
          прозрачные взаимоотношения.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="px-10 py-3">Поддержка</Button>
          <p className="space-x-2 text-sm">
            <span>Или на почту:</span>
            <Link className="text-purple" href="mailto:support@animezero.ru">
              support@animezero.ru
            </Link>
          </p>
        </div>
      </TitleBlock>
    </main>
  );
};

export default PartnershipScreen;
