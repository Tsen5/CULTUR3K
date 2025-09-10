import CreateListModal from "@/components/features/create-list-modal/create-list-modal";
import { Button, ButtonText } from "@/components/ui/button";
import { useCallback, useState } from "react";

export default function Lists() {
  const [isCreateListModalOpen, setIsCreateListModalOpen] =
    useState<boolean>(false);

  const handleCreateListModalOpen = useCallback(() => {
    setIsCreateListModalOpen(true);
  }, []);

  const handleCreateList = useCallback(async (name: string) => {
    console.log(name);
  }, []);

  return (
    <>
      <Button onPress={handleCreateListModalOpen}>
        <ButtonText>coucou</ButtonText>
      </Button>
      <CreateListModal
        isOpen={isCreateListModalOpen}
        setIsOpen={setIsCreateListModalOpen}
        onSave={handleCreateList}
      />
    </>
  );
}
