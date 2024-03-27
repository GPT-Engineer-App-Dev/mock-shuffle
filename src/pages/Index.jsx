import { useState } from "react";
import { Box, Heading, Input, Button, Flex, List, ListItem, Checkbox, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" margin="0 auto" p={4}>
      <Heading as="h1" mb={8}>
        Todo App
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" mr={4} />
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            Add
          </Button>
        </Flex>
      </form>
      <List mt={8} spacing={4}>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleCompleted(index)} mr={4} />
            <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
