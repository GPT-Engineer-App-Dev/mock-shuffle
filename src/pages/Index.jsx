import { useState } from "react";
import { Box, Heading, Input, Button, Flex, Spacer, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            Add
          </Button>
        </Flex>
      </form>
      <List mt={8} spacing={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} p={4} borderWidth={1} borderRadius="md" textDecoration={todo.completed ? "line-through" : "none"}>
            <Flex align="center">
              {todo.text}
              <Spacer />
              <IconButton icon={<FaCheck />} onClick={() => toggleComplete(index)} mr={4} />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
