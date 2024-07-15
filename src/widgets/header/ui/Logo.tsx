import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import Link from "next/link";
import { clsx } from "clsx";

const Mark: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-purple">{children}</span>;
};

interface LogoExtensions {
  Mark: typeof Mark;
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo: FC<PropsWithChildren<Props>> & LogoExtensions = ({
  children,
  href = "/",
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx("text-2xl font-semibold [&>span]:text-purple", className)}
      {...props}
    >
      {children}
    </Link>
  );
};

Logo.Mark = Mark;

export default Logo;
