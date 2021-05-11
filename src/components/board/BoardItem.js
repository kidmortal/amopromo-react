import { Box, Stack, Text } from "@chakra-ui/layout";

export function BoardItem() {
  return (
    <Stack w="275px" h="90px" bg="white" borderRadius="5px">
      <Stack margin="10px">
        <Text fontSize="medium">Fazer algo</Text>
      </Stack>
    </Stack>
  );
}
