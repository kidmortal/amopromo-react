import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

export function TransparentAddButton({ children, color, onClick }) {
  return (
    <Button
      leftIcon={<Icon as={RiAddLine} />}
      color={color}
      onClick={onClick}
      variant="ghost"
      _hover={{ borderColor: "green", border: "1px" }}
    >
      {children}
    </Button>
  );
}
