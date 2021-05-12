import { HStack, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BoardItem } from "./BoardItem";
import { TransparentAddButton } from "./TransparentAddButton";

export function BoardList({ color, title, items }) {
  return (
    <Droppable droppableId={title}>
      {(provided, snapshot) => (
        <Stack
          width={[100, 150, 200, 250, 300, 350]}
          borderTop="5px"
          borderRadius="5px"
          bg={color}
          justify="center"
          align="flex-start"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Stack
            width={[50, 100, 150, 200, 250, 300]}
            margin="20px"
            spacing={3}
          >
            <Text fontSize="medium" fontWeight="bold" color="white">
              {title}
            </Text>
            {items.map((item, index) => (
              <BoardItem item={item} index={index} key={item.id} />
            ))}
            {provided.placeholder}
            <TransparentAddButton text="Adicionar outro cartão" color="white" />
          </Stack>
        </Stack>
      )}
    </Droppable>
  );
}
