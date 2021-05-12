import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { BoardBlankList } from "./BoardBlankList";
import { BoardList } from "./BoardList";

export function Board() {
  const lists = useSelector((state) => state.board);

  return (
    <DragDropContext>
      <Stack h={[800]} w={[1000]} margin="40px">
        <Text fontSize="4xl" fontWeight="700">
          Kanban do Projeto
        </Text>

        <HStack zIndex="10" justify="start" align="self-end" spacing={5}>
          {lists?.map((list, index) => (
            <BoardList
              listIndex={index}
              title={list.title}
              list={list.list}
              color={list.color}
            />
          ))}
          <BoardBlankList />
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
    </DragDropContext>
  );
}
