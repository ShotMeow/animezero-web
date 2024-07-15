import type { FC } from "react";
import { DoorOpen } from "lucide-react";

import Button from "@/src/shared/ui/Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";

const Header: FC = () => {
  return (
    <header className="flex items-center gap-4">
      <Logo>
        Anime<Logo.Span>Zero</Logo.Span>
      </Logo>
      <Navigation />
      <Search />
      <Button>
        <DoorOpen size={18} />
        Войти
      </Button>
    </header>
  );
};

export default Header;
