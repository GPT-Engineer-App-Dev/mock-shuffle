import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <ChakraProvider>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList todos={todos} />
        <AddTodo />
      </Box>
    </ChakraProvider>
  );
}

export default App;
