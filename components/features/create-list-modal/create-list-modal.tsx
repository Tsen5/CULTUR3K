import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export interface CreateListModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSave: (name: string) => Promise<void>;
}

const CreateListModal = ({
  isOpen,
  setIsOpen,
  onSave,
}: CreateListModalProps) => {
  const { t } = useTranslation("lists");

  const [name, setName] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const isValid = useMemo(() => name.trim().length > 0, [name]);

  const handleChangeName = useCallback((text: string) => {
    setName(text);
  }, []);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    await onSave(name);
    setIsSaving(false);
    setIsOpen(false);
  }, [name, onSave, setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setName("");
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="sm">{t("title.newList")}</Heading>
        </ModalHeader>
        <ModalBody>
          <Input>
            <InputField
              value={name}
              onChangeText={handleChangeName}
              placeholder={t("placeholder.name")}
            />
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            action="secondary"
            className="mr-2"
            size="md"
            isDisabled={isSaving}
            onPress={handleClose}
          >
            <ButtonText>{t("button.cancel")}</ButtonText>
          </Button>
          <Button size="md" onPress={handleSave} isDisabled={!isValid}>
            {isSaving && <ButtonSpinner color="gray" className="mr-2" />}
            <ButtonText>{t("button.save")}</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateListModal;
