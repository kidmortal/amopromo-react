import { HStack, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export function BoardItem({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <Stack
          bg="white"
          borderRadius="5px"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Stack margin="10px" justify="flex-start">
            <Text fontWeight="medium" fontSize="medium" maxW="200px">
              {item.content}
            </Text>
            <HStack justify="start">
              <Text
                bg="blue.400"
                borderRadius="5px"
                padding="5px"
                fontWeight="medium"
                fontSize="medium"
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
