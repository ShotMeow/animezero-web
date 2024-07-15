import type { NavigationItemType } from "../types/navigationItems.types";
import { Clapperboard, Film, Library } from "lucide-react";

const getIconFromNav = (navItem: NavigationItemType) => {
  switch (navItem.name) {
    case "Каталог":
      return <Library />;
    case "Фильмы":
      return <Film />;
    case "Сериалы":
      return <Clapperboard />;
  }
};

export default getIconFromNav;
