import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
  breadcrumbs: string;
}

const TitleBlock: FC<PropsWithChildren<Props>> = ({
  breadcrumbs,
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx("space-y-6", className)} {...props}>
      <p className="text-zinc-400">
        <span className="border-b-2 border-purple font-bold text-white">
          Anime Zero
        </span>{" "}
        / {breadcrumbs}
      </p>
      {children}
    </div>
  );
};

export default TitleBlock;
