import { useLocalSearchParams } from "expo-router";

export default function List() {
  const { listId } = useLocalSearchParams<{ listId: string }>();
  return <>{listId}</>;
}
