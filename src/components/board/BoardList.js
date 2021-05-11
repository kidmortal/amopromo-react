import { Stack, Text } from "@chakra-ui/layout";
import { BoardItem } from "./BoardItem";

export function BoardList(props) {
  return (
    <Stack
      width="315px"
      borderTop="5px"
      borderRadius="5px"
      bg={props.color}
      justify="center"
      align="flex-start"
    >
      <Stack margin="20px" spacing={3}>
        <Text fontSize="medium" fontWeight="bold" color="white">
          {props.title}
        </Text>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </Stack>
    </Stack>
  );
}
