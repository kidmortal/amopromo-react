import { HStack, Stack } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";

import { TransparentAddButton } from "./TransparentAddButton";

export function BoardBlankList({ lists, setLists }) {
  const dispatch = useDispatch();

  function handleAddNewList() {
    dispatch({
      type: "ADD_LIST_TO_BOARD",
      payload: { title: "novo", color: "#5CC4FF" },
    });
  }

  return (
    <Stack
      borderTop="5px"
      borderRadius="5px"
      bg={"rgba(0, 0, 0, 0.1)"}
      justify="center"
      align="flex-start"
    >
      <Stack margin="20px" spacing={3}>
        <HStack justifyContent="space-between"></HStack>
        <TransparentAddButton onClick={handleAddNewList} color="black">
          Adicionar Nova Lista
        </TransparentAddButton>
      </Stack>
    </Stack>
  );
}
