import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BoardBlankList } from "./BoardBlankList";
import { BoardList } from "./BoardList";

export function Board() {
  const lists = useSelector((state) => state.board);
  const dispatch = useDispatch();

  function onDragEnd(result) {
    if (!result.destination) return;
    let from = result.source.droppableId;
    let to = result.destination.droppableId;
    let id = result.draggableId;
    let fromListIndex = lists.findIndex((list) => list.title === from);
    let toListIndex = lists.findIndex((list) => list.title === to);
    let fromList = lists[fromListIndex].list;
    let itemIndex = fromList.findIndex((listItem) => listItem.id === id);
    let item = fromList[itemIndex];

    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: { listIndex: toListIndex, item },
    });
    dispatch({
      type: "REMOVE_ITEM_FROM_LIST",
      payload: { itemIndex: itemIndex, listIndex: fromListIndex },
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack h={[800]} w={[1000]} margin="40px">
        <Text fontSize="4xl" fontWeight="700">
          Kanban do Projeto
        </Text>

        <HStack zIndex="10" justify="start" align="self-end" spacing={5}>
          {lists?.map((list, index) => (
            <BoardList
              key={list.title}
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
