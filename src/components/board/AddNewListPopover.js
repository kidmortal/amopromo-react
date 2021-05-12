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
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TransparentAddButton } from "./TransparentAddButton";

export function AddNewListPopover({ listIndex }) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  const colors = [
    "gray.500",
    "red.500",
    "gray.700",
    "green.500",
    "blue.500",
    "blue.800",
    "yellow.500",
    "orange.500",
    "purple.500",
    "pink.500",
  ];

  function validateInputs() {
    if (title.length < 5 || title.length > 30) {
      toast({
        description: "Titulo Precisa ter entre 5 a 30 caracteres",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return true;
    }
    return false;
  }

  function handleAddLista() {
    if (validateInputs()) return;
    let list = {
      title,
      color,
    };
    dispatch({
      type: "ADD_LIST_TO_BOARD",
      payload: list,
    });
    setTitle("");
    setColor("");
    setDisplay("none");
    setOpen(false);
  }

  function handleCancel() {
    setOpen(false);
    setDisplay("none");
    setTitle("");
    setColor("");
  }

  function handleOpen() {
    setOpen(true);
    setDisplay("block");
  }

  return (
    <Popover isOpen={open}>
      <PopoverTrigger>
        <Button onClick={handleOpen}>Adicionar Nova Lista</Button>
      </PopoverTrigger>
      <PopoverContent display={display}>
        <PopoverArrow />
        <PopoverHeader bg={color} borderRadius="5px">
          <Text>Adicionar Nova Lista</Text>
        </PopoverHeader>
        <PopoverBody>
          <Stack spacing={3}>
            <Input
              placeholder="Titulo"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Stack>
              <SimpleGrid columns={5} spacing={2}>
                {colors.map((c) => (
                  <Button
                    key={c}
                    aria-label={c}
                    background={c}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                    _hover={{ background: c }}
                    onClick={() => {
                      setColor(c);
                    }}
                  ></Button>
                ))}
              </SimpleGrid>
            </Stack>

            <HStack justify="space-between">
              <Button variant="outline" color="red.600" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button
                variant="outline"
                color="blue.600"
                onClick={handleAddLista}
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
