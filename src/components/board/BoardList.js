import { Stack, Text } from "@chakra-ui/layout";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { BoardItem } from "./BoardItem";
import { TransparentAddButton } from "./TransparentAddButton";

export function BoardList(props) {
  const items = [
    { id: 1, content: "Primeiro todo", tag: "teste" },
    { id: 2, content: "Segundo todo", tag: "teste" },
    { id: 3, content: "Terceiro todo", tag: "teste" },
  ];
  return (
    <Stack
      width={[100, 150, 200, 250, 300, 350]}
      borderTop="5px"
      borderRadius="5px"
      bg={props.color}
      justify="center"
      align="flex-start"
    >
      <Stack width={[50, 100, 150, 200, 250, 300]} margin="20px" spacing={3}>
        <Text fontSize="medium" fontWeight="bold" color="white">
          {props.title}
        </Text>
        {items.map((item, index) => (
          <BoardItem
            content={item.content}
            tag={item.tag}
            key={item.id}
            index={index}
          />
        ))}

        <TransparentAddButton text="Adicionar outro cartão" color="white" />
      </Stack>
    </Stack>
  );
}
