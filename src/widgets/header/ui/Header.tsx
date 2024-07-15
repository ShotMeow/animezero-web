import type { FC, HTMLAttributes } from "react";
import { DoorOpen } from "lucide-react";

import Button from "@/src/shared/ui/Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import { clsx } from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<Props> = ({ className, ...props }) => {
  return (
    <header
      className={clsx(
        "flex items-center gap-4 max-lg:py-4 max-sm:justify-between",
        className,
      )}
      {...props}
    >
      <Logo>
        Anime<Logo.Mark>Zero</Logo.Mark>
      </Logo>
      <Navigation className="max-lg:hidden" />
      <Search className="max-sm:hidden" />
      <Button>
        <DoorOpen size={18} />
        Войти
      </Button>
    </header>
  );
};

export default Header;
