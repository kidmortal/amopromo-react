import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export function AddNewItemModal({ listIndex }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function handleAddItem() {
    let item = { content: "Alguma coisa", tags: ["algo", "algo"] };
    console.log(listIndex);
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: { listIndex, item },
    });
  }

  return (
    <>
      <Button onClick={handleAddItem}>Adicionar Novo Item</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Titulo" />
            <Input placeholder="Tag" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
