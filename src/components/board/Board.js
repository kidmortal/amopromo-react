import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { BoardList } from "./BoardList";
import { TransparentAddButton } from "./TransparentAddButton";

export function Board() {
  return (
    <Stack h={[300, 500, 700, 800, 900]} margin="40px">
      <Text fontSize="4xl" fontWeight="700">
        Kanban do Projeto
      </Text>
      <HStack zIndex="10" justify="start" spacing={10}>
        <BoardList title="📝 To Do" color="#5CC4FF" />
        <BoardList title="📝 To Do" color="#945AD1" />
        <BoardList title="📝 To Do" color="#59D090" />
        <TransparentAddButton text="Adicionar outra lista" color="black" />
      </HStack>
      <Image
        zIndex="5"
        position="absolute"
        top={[700, 600, 500, 400]}
        right={[50]}
        w={[220, 335, 450, 565, 680]}
        h={[130, 200, 270, 340, 410]}
        src="/background.png"
        alt="background-desk"
      />
    </Stack>
  );
}
