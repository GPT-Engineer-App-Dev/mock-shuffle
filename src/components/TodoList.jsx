import React from "react";
import { Box, Text } from "@chakra-ui/react";

function TodoList({ todos }) {
  return (
    <Box>
      {todos.map((todo, index) => (
        <Text key={index}>{todo.text}</Text>
      ))}
    </Box>
  );
}

export default TodoList;
