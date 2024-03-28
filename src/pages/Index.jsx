// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Checkbox, Flex, Heading, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: nextId, text: inputValue, completed: false }]);
      setNextId(nextId + 1);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" mr={4} />
          <Button type="submit" colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </Flex>
      </form>

      <Stack mt={8} spacing={2}>
        {todos.map((todo) => (
          <Flex key={todo.id} p={4} bg="gray.100" borderRadius="lg" alignItems="center">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)} mr={4} />
            <Text flex="1" textDecoration={todo.completed ? "line-through" : "none"}>
              {todo.text}
            </Text>
            <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
