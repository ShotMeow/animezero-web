import type { ReactElement } from "react";
import type { NavigationItemType } from "../types/navigationItem.types";

import Vk from "@/shared/assets/icons/vk.svg";
import Tg from "@/shared/assets/icons/tg.svg";
import Inst from "@/shared/assets/icons/inst.svg";
import Mail from "@/shared/assets/icons/mail.svg";

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
