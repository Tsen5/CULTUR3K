import { Box } from "@/components/ui/box";
import useSearchMedia from "@/hooks/useSearchMedia";
import { MediaType } from "@/types/list";
import { useState } from "react";
import MediaTypesPicker from "./media-types-picker";
import SearchInput from "./search-input";
import SearchResultList from "./search-result-list/search-result-list";

const SearchMedia = () => {
  const [search, setSearch] = useState<string>("");

  const [types, setTypes] = useState<MediaType[]>([]);

  const { result, isSearching } = useSearchMedia({ query: search, types });

  return (
    <Box>
      <SearchInput
        search={search}
        setSearch={setSearch}
        isSearching={isSearching}
      />
      <MediaTypesPicker types={types} setTypes={setTypes} />
      <SearchResultList result={result} />
    </Box>
  );
};

export default SearchMedia;
