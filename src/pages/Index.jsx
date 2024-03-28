// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Heading, Input, Button, Flex, Checkbox, Spacer } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading mb={8}>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="New todo" mr={4} />
          <Button type="submit" colorScheme="blue">
            <FaPlus />
          </Button>
        </Flex>
      </form>
      {todos.map((todo, index) => (
        <Flex key={index} mt={4} alignItems="center">
          <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
          <Box ml={4}>{todo.text}</Box>
          <Spacer />
        </Flex>
      ))}
    </Box>
  );
};

export default Index;
