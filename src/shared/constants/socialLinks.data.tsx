import type { NavigationItemType } from "@/src/shared/types/navigationItem.types";
import type { ReactElement } from "react";

import Vk from "@/src/shared/assets/icons/vk.svg";
import Tg from "@/src/shared/assets/icons/tg.svg";
import Inst from "@/src/shared/assets/icons/inst.svg";
import Mail from "@/src/shared/assets/icons/mail.svg";

export const socialLinksData: (NavigationItemType & { icon: ReactElement })[] =
  [
    {
      name: "Ссылка на группу Вконтакте",
      url: "https://vk.com/animezero",
      icon: <Vk />,
    },
    {
      name: "Ссылка на канал в Телеграм",
      url: "https://t.me/animezero",
      icon: <Tg />,
    },
    {
      name: "Ссылка на канал в Инстаграме",
      url: "https://instagram.com/animezero",
      icon: <Inst />,
    },
    {
      name: "Ссылка на почту",
      url: "mailto:support@animezero.ru",
      icon: <Mail />,
    },
  ];
