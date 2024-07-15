import type { FC } from "react";
import { SearchIcon } from "lucide-react";

const Search: FC = () => {
  return (
    <label className="h-10 flex items-center w-full">
      <input
        className="rounded-l-md h-full w-full px-6 placeholder:text-sm placeholder:text-zinc-500 text-black"
        type="text"
        title="Поиск"
        placeholder="Популярные новинки"
      />
      <div className="bg-zinc-900 h-full rounded-r-md px-2 flex items-center justify-center cursor-pointer">
        <SearchIcon size={20} />
      </div>
    </label>
  );
};

export default Search;
