import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BoardBlankList } from "./BoardBlankList";
import { BoardList } from "./BoardList";
import { TransparentAddButton } from "./TransparentAddButton";

export function Board() {
  const [lists, setLists] = useState([
    {
      title: "📝 To Do",
      color: "#5CC4FF",
      list: [
        {
          id: "f3f3f",
          content: "Primeiro todoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          tag: "teste1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        { id: "sf3fe", content: "Segundo todo", tag: "teste1" },
        { id: "sfsf23f", content: "Terceiro todo", tag: "teste1" },
      ],
    },
    {
      title: "📝 Doing",
      color: "#945AD1",
      list: [
        { id: "fdfd", content: "Primeiro todo", tag: "teste2" },
        { id: "asxx", content: "Segundo todo", tag: "teste2" },
        { id: "svff", content: "Terceiro todo", tag: "teste2" },
      ],
    },
    {
      title: "📝 Complete",
      color: "#59D090",
      list: [
        { id: "a4f4fa", content: "Primeiro todo", tag: "teste3" },
        { id: "asdssd", content: "Segundo todo", tag: "teste3" },
        { id: "sgf4g4", content: "Terceiro todo", tag: "teste3" },
      ],
    },
  ]);

  function handleAddList() {
    setLists([...lists, { color: "#5CC4FF", title: "teste", list: [] }]);
  }

  return (
    <Stack h={[800]} w={[1000]} margin="40px">
      <Text fontSize="4xl" fontWeight="700">
        Kanban do Projeto
      </Text>

      <HStack zIndex="10" justify="start" align="self-end" spacing={5}>
        {lists.map((list) => (
          <BoardList
            title={list.title}
            list={list.list}
            lists={lists}
            setLists={setLists}
            color={list.color}
          />
        ))}
        <BoardBlankList lists={lists} setLists={setLists} />
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
