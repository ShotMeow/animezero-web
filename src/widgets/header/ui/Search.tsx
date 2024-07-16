import type { FC, LabelHTMLAttributes } from "react";
import { SearchIcon } from "lucide-react";
import { clsx } from "clsx";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const Search: FC<Props> = ({ className, ...props }) => {
  return (
    <label
      className={clsx("relative flex h-10 w-full items-center", className)}
      {...props}
    >
      <input
        className="size-full rounded-md bg-zinc-900 pl-6 pr-12 font-light placeholder:text-sm placeholder:text-zinc-300"
        type="text"
        title="Поиск"
        placeholder="Популярные новинки"
      />
      <div className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-md bg-zinc-900 px-2">
        <SearchIcon size={20} />
      </div>
    </label>
  );
};

export default Search;
