import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

export function BoardItem({ item, itemIndex, listIndex }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch({
      type: "REMOVE_ITEM_FROM_LIST",
      payload: { listIndex, itemIndex },
    });
  }

  return (
    <Draggable draggableId={item.id} index={itemIndex}>
      {(provided) => (
        <Stack
          bg="white"
          borderRadius="5px"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <IconButton
            marginLeft="180px"
            position="absolute"
            variant="unstyled"
            onClick={handleDeleteItem}
            icon={<Icon as={AiOutlineDelete} color="red.600" />}
          />

          <Stack margin="10px" justify="flex-start" padding="10px">
            <Text fontWeight="medium" fontSize="medium" maxW="200px">
              {item.content}
            </Text>
            <HStack justify="start">
              <Text
                bg="blue.400"
                borderRadius="15px"
                padding="5px"
                fontWeight="semibold"
                fontSize="smaller"
                maxW="200px"
              >
                {item.tag}
              </Text>
            </HStack>
          </Stack>
        </Stack>
      )}
    </Draggable>
  );
}
