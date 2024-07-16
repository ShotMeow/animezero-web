import { Clapperboard, Film, Library } from "lucide-react";
import type { NavigationItemType } from "@/shared/types/navigationItem.types";

const getIconFromNavItemName = (navItem: NavigationItemType) => {
  switch (navItem.name) {
    case "Каталог":
      return <Library />;
    case "Фильмы":
      return <Film />;
    case "Сериалы":
      return <Clapperboard />;
  }
};

export default getIconFromNavItemName;
