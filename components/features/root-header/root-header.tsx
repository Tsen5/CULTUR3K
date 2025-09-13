import { Button } from "@/components/ui/button";
import { View } from "@/components/ui/view";
import { useSearchStore } from "@/stores/search";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export type RootHeaderProps = NativeStackHeaderProps;

const RootHeader = (_props: RootHeaderProps) => {
  const setIsSearchOpen = useSearchStore((state) => state.setIsOpen);

  return (
    <View>
      <Button
        style={{ marginTop: 50 }}
        onPress={() => {
          setIsSearchOpen(true);
        }}
      >
        Search
      </Button>
    </View>
  );
};

export default RootHeader;
