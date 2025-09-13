import { Button, ButtonIcon } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Eye, Heart, MoreVerticalIcon } from "lucide-react-native";
import { useTranslation } from "react-i18next";

const MoreMenu = () => {
  const { t } = useTranslation("search");

  return (
    <Menu
      placement="bottom"
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button variant="link" {...triggerProps}>
            <ButtonIcon as={MoreVerticalIcon} />
          </Button>
        );
      }}
    >
      <MenuItem key="addToFavorites" textValue={t("label.addToFavorites")}>
        <Icon as={Heart} size="md" className="mr-2" />
        <MenuItemLabel size="md">{t("label.addToFavorites")}</MenuItemLabel>
      </MenuItem>
      <MenuItem key="addToWatchlist" textValue={t("label.addToWatchlist")}>
        <Icon as={Eye} size="md" className="mr-2" />
        <MenuItemLabel size="md">{t("label.addToWatchlist")}</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default MoreMenu;
