import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { BoardList } from "./BoardList";
import { TransparentAddButton } from "./TransparentAddButton";

export function Board() {
  const items1 = [
    { id: "f3f3f", content: "Primeiro todo", tag: "teste1" },
    { id: "sf3fe", content: "Segundo todo", tag: "teste1" },
    { id: "sfsf23f", content: "Terceiro todo", tag: "teste1" },
  ];
  const items2 = [
    { id: "fdfd", content: "Primeiro todo", tag: "teste2" },
    { id: "asxx", content: "Segundo todo", tag: "teste2" },
    { id: "svff", content: "Terceiro todo", tag: "teste2" },
  ];
  const items3 = [
    { id: "a4f4fa", content: "Primeiro todo", tag: "teste3" },
    { id: "asdssd", content: "Segundo todo", tag: "teste3" },
    { id: "sgf4g4", content: "Terceiro todo", tag: "teste3" },
  ];
  return (
    <Stack h={[300, 400, 500, 600, 700]} margin="40px">
      <Text fontSize="4xl" fontWeight="700">
        Kanban do Projeto
      </Text>

      <HStack zIndex="10" justify="start" spacing={10}>
        <BoardList title="📝 To Do" items={items1} color="#5CC4FF" />
        <BoardList title="📝 Doing" items={items2} color="#945AD1" />
        <BoardList title="📝 Complete" items={items3} color="#59D090" />
        <TransparentAddButton text="Adicionar outra lista" color="black" />
      </HStack>

      <Image
        zIndex="5"
        position="absolute"
        top={[600, 500, 400, 300]}
        right={[50]}
        w={[220, 335, 450, 465, 580]}
        h={[130, 200, 270, 240, 310]}
        src="/background.png"
        alt="background-desk"
      />
    </Stack>
  );
}
