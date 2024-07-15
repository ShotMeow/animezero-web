import type { FC, LabelHTMLAttributes } from "react";
import { SearchIcon } from "lucide-react";
import { clsx } from "clsx";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const Search: FC<Props> = ({ className, ...props }) => {
  return (
    <label
      className={clsx("flex h-10 w-full items-center", className)}
      {...props}
    >
      <input
        className="size-full rounded-l-md px-6 text-black placeholder:text-sm placeholder:text-zinc-500"
        type="text"
        title="Поиск"
        placeholder="Популярные новинки"
      />
      <div className="flex h-full cursor-pointer items-center justify-center rounded-r-md bg-zinc-900 px-2">
        <SearchIcon size={20} />
      </div>
    </label>
  );
};

export default Search;
