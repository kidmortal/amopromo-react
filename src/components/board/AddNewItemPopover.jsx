import {
  Button,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useStyles,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function AddNewItemPopover({ listIndex }) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  function validateInputs() {
    if (content.length < 10 || content.length > 200) {
      toast({
        description: "Conteudo Precisa ter entre 10 a 200 caracteres",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    }
    if (tag.length < 3 || tag.length > 20) {
      toast({
        description: "Tag Precisa ter entre 3 a 20 caracteres",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    }

    return false;
  }

  function handleAddItem() {
    if (validateInputs()) return;
    const id = String(new Date().valueOf());
    let item = {
      id,
      content,
      tag,
    };
    console.log(listIndex);
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: { listIndex, item },
    });
    setOpen(false);
    setDisplay("none");
    setContent("");
    setTag("");
  }

  function handleCancel() {
    setOpen(false);
    setDisplay("none");
    setContent("");
    setTag("");
  }

  function handleOpen() {
    setOpen(true);
    setDisplay("block");
  }

  return (
    <Popover isOpen={open}>
      <PopoverTrigger>
        <Button variant="unstyled" onClick={handleOpen}>
          Adicionar Novo Item
        </Button>
      </PopoverTrigger>
      <PopoverContent display={display}>
        <PopoverArrow />
        <PopoverHeader>
          <Text>Adicionar Novo Item</Text>
        </PopoverHeader>
        <PopoverBody>
          <Stack spacing={3}>
            <Input
              placeholder="Conteudo"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Input
              placeholder="Tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <HStack justify="space-between">
              <Button variant="outline" color="red.600" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button
                variant="outline"
                color="blue.600"
                onClick={handleAddItem}
              >
                Adicionar
              </Button>
            </HStack>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
