import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { title: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo App</Heading>
      <Input placeholder="Add a new todo..." value={inputValue} onChange={handleInputChange} size="md" mb={4} />
      <Button onClick={handleAddTodo} colorScheme="blue" mb={4}>
        Add Todo
      </Button>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" alignItems="center" justifyContent="space-between">
            <Checkbox isChecked={todo.isCompleted} onChange={() => handleCompleteTodo(index)}>
              {todo.title}
            </Checkbox>
            <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoPage;
