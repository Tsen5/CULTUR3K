import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { MediaType } from "@/types/list";
import { BookText, Clapperboard, Gamepad2 } from "lucide-react-native";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const AVAILABLE_TYPES = [MediaType.MOVIE, MediaType.VIDEO_GAME, MediaType.BOOK];

export const ICON_BY_TYPE = {
  [MediaType.MOVIE]: Clapperboard,
  [MediaType.VIDEO_GAME]: Gamepad2,
  [MediaType.BOOK]: BookText,
};

export interface MediaTypesPickerProps {
  types: MediaType[];
  setTypes: (types: MediaType[]) => void;
}

const MediaTypesPicker = ({ types, setTypes }: MediaTypesPickerProps) => {
  const { t } = useTranslation("search");

  const handleToggleType = useCallback(
    (toggledType: MediaType) => () => {
      if (types.includes(toggledType)) {
        setTypes(types.filter((type) => type !== toggledType));
      } else {
        setTypes([...types, toggledType]);
      }
    },
    [setTypes, types],
  );

  return (
    <HStack className="m-3 shrink-0" space="sm">
      {AVAILABLE_TYPES.map((type) => (
        <Button
          key={type}
          className="px-3 h-8 rounded-full"
          size="sm"
          variant={types.includes(type) ? "solid" : "outline"}
          onPress={handleToggleType(type)}
        >
          <ButtonIcon as={ICON_BY_TYPE[type]} />
          <ButtonText>{t(`mediaType.${type}`, { count: 2 })}</ButtonText>
        </Button>
      ))}
    </HStack>
  );
};

export default MediaTypesPicker;
