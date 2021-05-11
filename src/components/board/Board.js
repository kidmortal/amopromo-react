import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { BoardList } from "./BoardList";

export function Board() {
  return (
    <Stack margin="20px" justify="space-around">
      <Text fontSize="5xl">Kanban da Felicidade</Text>
      <HStack justify="start" spacing={10}>
        <BoardList title="📝 To Do" color="#5CC4FF" />
        <BoardList title="📝 To Do" color="#945AD1" />
        <BoardList title="📝 To Do" color="#59D090" />
      </HStack>
      <Image src="url('/assets/board-backgrund.svg')" />
    </Stack>
  );
}
