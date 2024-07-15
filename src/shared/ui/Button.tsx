import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { clsx } from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "bg-purple px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple/90 transition-all active:scale-95",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
