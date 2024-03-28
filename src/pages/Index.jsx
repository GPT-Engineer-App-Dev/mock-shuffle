import { Box, VStack, Input, IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import ChatMessage from "../components/ChatMessage";

const Index = () => {
  return (
    <Box p={4} h="100vh" display="flex" flexDirection="column">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Chat App
      </Text>
      <VStack spacing={4} flexGrow={1} overflow="auto">
        <ChatMessage text="Hey there! How can I assist you today?" sender="bot" />
        <ChatMessage text="I'm looking for some gift ideas for my mom's birthday." sender="me" />
        <ChatMessage text="Great, I can help with that! What are some of your mom's interests and hobbies?" sender="bot" />
      </VStack>

      <Box display="flex" mt={4}>
        <Input placeholder="Type a message..." flexGrow={1} mr={4} />
        <IconButton icon={<FaArrowRight />} aria-label="Send message" />
      </Box>
    </Box>
  );
};

export default Index;
