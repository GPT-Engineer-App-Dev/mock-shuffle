import { Box, Text } from "@chakra-ui/react";

const ChatMessage = ({ text, sender }) => {
  const alignSelf = sender === "me" ? "flex-end" : "flex-start";
  const bg = sender === "me" ? "blue.500" : "gray.100";

  return (
    <Box maxW="70%" bg={bg} p={2} borderRadius="lg" alignSelf={alignSelf}>
      <Text>{text}</Text>
    </Box>
  );
};

export default ChatMessage;
