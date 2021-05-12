import { Button, HStack, Text } from "@chakra-ui/react";

export function TransparentAddButton(props) {
  return (
    <Button
      color={props.color}
      onClick={props.onClick}
      variant="ghost"
      _hover={{ borderColor: "green", border: "1px" }}
    >
      <HStack spacing={5}>
        <Text fontSize="4xl" fontWeight="thin">
          +
        </Text>
        <Text fontWeight="light">{props.text}</Text>
      </HStack>
    </Button>
  );
}
