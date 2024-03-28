import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";

function AddTodo() {
  return (
    <Box>
      <Input placeholder="Enter a new todo" />
      <Button>Add</Button>
    </Box>
  );
}

export default AddTodo;
