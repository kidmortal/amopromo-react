import { Stack, Text } from "@chakra-ui/layout";
import { BoardItem } from "./BoardItem";
import { TransparentAddButton } from "./TransparentAddButton";

export function BoardList(props) {
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
        <BoardItem content="Primeiro todo" tag="Teste" />
        <BoardItem content="Segundo todo" tag="Teste" />
        <BoardItem content="Terceiro todo" tag="Teste" />
        <TransparentAddButton text="Adicionar outro cartão" color="white" />
      </Stack>
    </Stack>
  );
}
