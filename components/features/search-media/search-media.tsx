import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from "@/components/ui/actionsheet";
import { VStack } from "@/components/ui/vstack";
import useSearchMedia from "@/hooks/useSearchMedia";
import { useSearchStore } from "@/stores/search";
import { MediaType } from "@/types/list";
import { useCallback, useState } from "react";
import MediaTypesPicker from "./media-types-picker";
import SearchInput from "./search-input";
import SearchResultList from "./search-result-list/search-result-list";

const SearchMedia = () => {
  const isSearchOpen = useSearchStore((state) => state.isOpen);
  const setIsSearchOpen = useSearchStore((state) => state.setIsOpen);

  const [search, setSearch] = useState<string>("");

  const [types, setTypes] = useState<MediaType[]>([]);

  const { result, isSearching } = useSearchMedia({ query: search, types });

  const handleClose = useCallback(() => {
    setIsSearchOpen(false);
  }, [setIsSearchOpen]);

  return (
    <Actionsheet
      isOpen={isSearchOpen}
      onClose={handleClose}
      snapPoints={[90, 100]}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="px-0 pb-0">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack className="w-full shrink-0">
          <SearchInput
            search={search}
            setSearch={setSearch}
            isSearching={isSearching}
          />
          <MediaTypesPicker types={types} setTypes={setTypes} />
        </VStack>
        <SearchResultList result={result} />
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default SearchMedia;
