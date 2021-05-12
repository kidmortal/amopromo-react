import { HStack } from "@chakra-ui/layout";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Draggable } from "react-beautiful-dnd";

export function BoardItem(props) {
  return (
    <Draggable draggableId={props.key} index={props.index}>
      {(provided) => (
        <Stack
          h="90px"
          bg="white"
          borderRadius="5px"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Stack margin="10px" justify="flex-start">
            <Text fontWeight="medium" fontSize="medium">
              {props.content}
            </Text>
            <HStack justify="start">
              <Tag bg="blue.400" variant="solid">
                {props.tag}
              </Tag>
            </HStack>
          </Stack>
        </Stack>
      )}
    </Draggable>
  );
}
