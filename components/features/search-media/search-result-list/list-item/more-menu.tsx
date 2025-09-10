import { Button, ButtonIcon } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react-native";

const MoreMenu = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* <Menu
      placement="bottom"
      offset={5}
      className="border-0"
      trigger={({ ...triggerProps }) => {
        return (
          <Button variant="link" {...triggerProps}>
            <ButtonIcon as={MoreHorizontalIcon} />
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
    </Menu> */}
      <Button variant="link">
        <ButtonIcon as={MoreHorizontalIcon} />
      </Button>
    </>
  );
};

export default MoreMenu;
