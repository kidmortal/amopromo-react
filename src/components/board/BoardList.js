import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { AiOutlineClose } from "react-icons/ai";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import { BoardItem } from "./BoardItem";
import { useDispatch } from "react-redux";
import { AddNewItemPopover } from "../board/AddNewItemPopover";

export function BoardList({ color, title, list, listIndex }) {
  const dispatch = useDispatch();

  function handleDeleteList() {
    dispatch({
      type: "REMOVE_LIST_FROM_BOARD",
      payload: { listIndex },
    });
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
            {list?.map((item, idx) => (
              <BoardItem
                item={item}
                listIndex={listIndex}
                itemIndex={idx}
                key={item.id}
              />
            ))}

            {provided.placeholder}
            <AddNewItemPopover listIndex={listIndex} />
          </Stack>
        </Stack>
      )}
    </Droppable>
  );
}
