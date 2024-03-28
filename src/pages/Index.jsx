import { useState } from "react";
import { Box, Heading, Input, Button, Flex, List, ListItem, Checkbox, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="480px" mx="auto" mt={8}>
      <Heading mb={8}>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo item" mr={4} />
          <Button type="submit" colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </Flex>
      </form>

      <List spacing={4} mt={8}>
        {todos.map((todo, index) => (
          <ListItem key={index} p={4} borderWidth={1} borderRadius="lg" opacity={todo.completed ? 0.5 : 1}>
            <Flex align="center">
              <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(index)} mr={4} />
              <span>{todo.text}</span>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
