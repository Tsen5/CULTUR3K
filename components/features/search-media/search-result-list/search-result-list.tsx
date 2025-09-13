import { VirtualizedList } from "@/components/ui/virtualized-list";
import { SearchResult } from "@/types/search";
import { memo, useCallback, useState } from "react";
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { getListItemProps } from "./getListItemProps";
import ListItem, { LIST_ITEM_HEIGHT } from "./list-item/list-item";

export interface SearchResultListProps {
  result: SearchResult[];
}

const SearchResultList = ({ result }: SearchResultListProps) => {
  const [displayBorderTop, setDisplayBorderTop] = useState<boolean>(false);

  const renderItem: ListRenderItem<SearchResult> = useCallback(
    ({ item }) => <ListItem {...getListItemProps(item)} />,
    [],
  );

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      setDisplayBorderTop(event.nativeEvent.contentOffset.y > 0);
    },
    [],
  );

  return (
    <VirtualizedList<SearchResult>
      onScroll={handleScroll}
      data={result}
      className={`w-full border-t ${displayBorderTop ? "border-t-background-300" : "border-t-transparent"}`}
      initialNumToRender={8}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemCount={() => result.length}
      getItem={(_data, index) => result[index]}
      maxToRenderPerBatch={8}
      windowSize={5}
      getItemLayout={(_, index) => ({
        length: LIST_ITEM_HEIGHT,
        offset: LIST_ITEM_HEIGHT * index,
        index,
      })}
    />
  );
};

export default memo(SearchResultList);
