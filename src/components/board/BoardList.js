import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { AiOutlineClose } from "react-icons/ai";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import { BoardItem } from "./BoardItem";
import { AddNewItemModal } from "./AddNewItemModal";

export function BoardList({ color, title, list, lists, setLists }) {
  function handleDeleteList() {
    let index = lists.findIndex((item) => item.title === title);
    if (index >= 0) {
      let newState = [...lists];
      newState.splice(index, 1);
      setLists(newState);
    }
  }

  function handleAddNewItem() {
    let index = lists.findIndex((item) => item.title === title);
    let newState = [...lists];
    newState[index].list.push({ id: "xxxx", content: "Novo", tag: "novo" });
    setLists(newState);
  }

  return (
    <Droppable droppableId={title}>
      {(provided, snapshot) => (
        <Stack
          borderTop="5px"
          borderRadius="5px"
          bg={color}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Stack margin="20px" spacing={3} width={[220]}>
            <HStack justifyContent="space-between">
              <Text fontSize="medium" fontWeight="bold" color="white">
                {title}
              </Text>
              <IconButton
                variant="unstyled"
                onClick={handleDeleteList}
                icon={
                  <Icon
                    fontSize="x-large"
                    as={AiOutlineClose}
                    color="red.600"
                  />
                }
              />
            </HStack>
            {list?.map((item, index) => (
              <BoardItem item={item} index={index} key={item.id} />
            ))}

            {provided.placeholder}
            <AddNewItemModal />
          </Stack>
        </Stack>
      )}
    </Droppable>
  );
}
