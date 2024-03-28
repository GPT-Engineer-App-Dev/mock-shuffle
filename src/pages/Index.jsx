// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Heading, Input, Button, Flex, Spacer, IconButton, VStack, StackDivider, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>

      <Flex mb={8}>
        <Input value={inputValue} onChange={handleInputChange} placeholder="Enter a new todo" mr={4} />
        <Button onClick={handleAddTodo} colorScheme="green" leftIcon={<FaPlus />}>
          Add Todo
        </Button>
      </Flex>

      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {todos.map((todo, index) => (
          <Flex key={index} p={4} shadow="md" borderWidth="1px" align="center">
            <Text>{todo}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} aria-label="Delete todo" />
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
