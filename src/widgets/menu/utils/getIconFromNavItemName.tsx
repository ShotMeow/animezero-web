import type { NavigationItemType } from "@/src/shared/types/navigationItem.types";
import { Clapperboard, Film, Library } from "lucide-react";

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
