import type { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface LogoExtensions {
  Span: typeof LogoSpan;
}

const Logo: FC<PropsWithChildren> & LogoExtensions = ({ children }) => {
  return (
    <Link href="/" className="text-2xl [&>span]:text-purple font-semibold">
      {children}
    </Link>
  );
};

const LogoSpan: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-purple">{children}</span>;
};

Logo.Span = LogoSpan;

export default Logo;
