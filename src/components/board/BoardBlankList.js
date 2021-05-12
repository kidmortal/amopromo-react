import { HStack, Stack } from "@chakra-ui/layout";

import { TransparentAddButton } from "./TransparentAddButton";

export function BoardBlankList({ lists, setLists }) {
  return (
    <Stack
      borderTop="5px"
      borderRadius="5px"
      bg={"rgba(0, 0, 0, 0.1)"}
      justify="center"
      align="flex-start"
    >
      <Stack margin="20px" spacing={3}>
        <HStack justifyContent="space-between"></HStack>
        <TransparentAddButton color="black">
          Adicionar Nova Lista
        </TransparentAddButton>
      </Stack>
    </Stack>
  );
}
