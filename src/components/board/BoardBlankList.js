import { Stack } from "@chakra-ui/layout";
import { AddNewListPopover } from "../board/AddNewListPopover";

export function BoardBlankList({ lists, setLists }) {
  return (
    <Stack
      width={[220]}
      borderTop="5px"
      margin="30px"
      borderRadius="5px"
      bg={"rgba(0, 0, 0, 0.1)"}
      justify="center"
      align="flex-start"
    >
      <AddNewListPopover />
    </Stack>
  );
}
