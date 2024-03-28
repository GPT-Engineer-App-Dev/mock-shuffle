import { useState } from "react";
import { Box, Heading, Input, Button, Checkbox, HStack, VStack, Text, Spacer, IconButton } from "@chakra-ui/react";
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

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new task" />
          <Button type="submit" colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </HStack>
      </form>
      <VStack align="stretch" mt={8}>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
            <Text as={todo.completed ? "del" : ""}>{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => removeTodo(index)} />
          </HStack>
        ))}
        {todos.some((todo) => todo.completed) && (
          <Button onClick={removeCompleted} mt={4}>
            Remove Completed
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
