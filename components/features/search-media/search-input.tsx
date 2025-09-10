import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Search } from "lucide-react-native";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
  isSearching: boolean;
}

const SearchInput = ({ search, setSearch, isSearching }: SearchInputProps) => {
  const { t } = useTranslation("search");

  const handleChangeSearch = useCallback(
    (text: string) => {
      setSearch(text);
    },
    [setSearch],
  );

  return (
    <Input className="mt-3 mx-3">
      <InputSlot className="pl-2">
        <InputIcon as={Search} />
      </InputSlot>
      <InputField
        value={search}
        onChangeText={handleChangeSearch}
        placeholder={t("placeholder.search")}
      />
      <InputSlot className="pr-2">
        {isSearching && <Spinner color="grey" />}
      </InputSlot>
    </Input>
  );
};

export default SearchInput;
