import type { FC, HTMLAttributes } from "react";
import { DoorOpen } from "lucide-react";
import { clsx } from "clsx";

import Button from "@/shared/ui/Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<Props> = ({ className, ...props }) => {
  return (
    <header
      className={clsx(
        "sticky inset-x-0 top-0 mb-2 h-16 bg-black/50 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <div className="container flex h-full items-center gap-4 max-sm:justify-between">
        <Logo>
          Anime<Logo.Mark>Zero</Logo.Mark>
        </Logo>
        <Navigation className="max-lg:hidden" />
        <Search className="max-sm:hidden" />
        <Button>
          <DoorOpen size={18} />
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
