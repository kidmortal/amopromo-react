import { HStack, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { forwardRef } from "react";
import { Draggable } from "react-beautiful-dnd";

export function BoardItem({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <Stack
          h="90px"
          bg="white"
          borderRadius="5px"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Stack margin="10px" justify="flex-start">
            <Text fontWeight="medium" fontSize="medium">
              {item.content}
            </Text>
            <HStack justify="start">
              <Tag bg="blue.400" variant="solid">
                {item.tag}
              </Tag>
            </HStack>
          </Stack>
        </Stack>
      )}
    </Draggable>
  );
}
