import SeracIcon from "@/assets/svg/search.svg?react";
import { TextInput } from "@/components/core/TextInput";
import { getTranslate } from "@/messages";
import { useAppDispatch } from "@/store/hooks";
import { setSearchQuery } from "@/store/slices/searchSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const translate = getTranslate();

  return (
    <header className="bg-navy-950 p-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row md:gap-6">
        <h3 className="text-lg font-semibold whitespace-nowrap text-white lg:text-lg">
          {translate.assetsList}
        </h3>
        <div className="md:w-[70%]">
          <TextInput
            placeholder={translate.searchInput}
            startIcon={<SeracIcon className="fill-current md:h-7 md:w-7" />}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
