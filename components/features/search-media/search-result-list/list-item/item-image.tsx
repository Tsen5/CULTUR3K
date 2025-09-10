import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { MediaType } from "@/types/list";
import { ImageIcon } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { LIST_ITEM_HEIGHT } from "./list-item";

export interface ItemImageProps {
  imagePath: string | null;
  type: MediaType;
  title: string;
}

const ItemImage = ({ imagePath, type, title }: ItemImageProps) => {
  const { t } = useTranslation("search");
  return (
    <>
      {imagePath ? (
        <Image
          size="none"
          className="aspect-[2/3] rounded-md h-full"
          source={{ uri: imagePath }}
          style={{ height: LIST_ITEM_HEIGHT }}
          alt={t(`alt.${type}`, { title })}
        />
      ) : (
        <Box
          className="aspect-[2/3] rounded-md flex items-center justify-center"
          style={{ height: LIST_ITEM_HEIGHT }}
        >
          <ImageIcon className="w-5 h-5 self-center" />
        </Box>
      )}
    </>
  );
};

export default ItemImage;
