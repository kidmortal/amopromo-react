import { HStack } from "@chakra-ui/layout";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

export function BoardItem(props) {
  return (
    <Stack flex={1} h="90px" bg="white" borderRadius="5px">
      <Stack margin="10px" justify="flex-start">
        <Text fontWeight="medium" fontSize="medium">
          {props.content}
        </Text>
        <HStack justify="start">
          <Tag bg="blue.400" variant="solid">
            {props.tag}
          </Tag>
        </HStack>
      </Stack>
    </Stack>
  );
}
