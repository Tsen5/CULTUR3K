import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { isValidDate } from "@/helpers/isValidDate";
import { MediaType } from "@/types/list";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ICON_BY_TYPE } from "../../media-types-picker";
import ItemImage from "./item-image";
import MoreMenu from "./more-menu";

export const LIST_ITEM_HEIGHT = 80;

export interface ListItemProps {
  title: string;
  date: string | null;
  imagePath: string | null;
  type: MediaType;
}

const ListItem = ({ title, date, imagePath, type }: ListItemProps) => {
  const { t } = useTranslation("search");

  const formattedDate = useMemo(() => {
    if (!date || date.length === 0) {
      return null;
    }
    const dateObj = new Date(date);
    if (!isValidDate(dateObj)) {
      return null;
    }
    return dateObj.getFullYear();
  }, [date]);

  return (
    <HStack
      className="py-0.5 mx-3 items-center"
      style={{ height: LIST_ITEM_HEIGHT }}
    >
      <ItemImage imagePath={imagePath} type={type} title={title} />
      <VStack className="mx-2 flex-1">
        <Heading
          className="line-clamp-1 leading-6"
          numberOfLines={1}
          size="sm"
          ellipsizeMode="tail"
        >
          {title}
        </Heading>
        <HStack space="sm">
          <HStack space="xs" className="items-center">
            <Icon
              className="h-3 w-3 text-typography-600"
              as={ICON_BY_TYPE[type]}
            />
            <Text size="sm" className="text-typography-600">
              {t(`mediaType.${type}`, { count: 1 })}
            </Text>
          </HStack>
          {formattedDate && (
            <>
              <Text size="sm" className="text-typography-600">
                {t("separator.dot")}
              </Text>
              <Text size="sm" className="text-typography-600">
                {formattedDate}
              </Text>
            </>
          )}
        </HStack>
      </VStack>
      <MoreMenu />
    </HStack>
  );
};

export default ListItem;
