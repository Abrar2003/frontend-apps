import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const handleAddTodo = () => {
    setTodolist([...todolist, todo]);
  }
  const handleDelete = (i) => {
    const newTodos = [...todolist];
    newTodos.splice(i, 1);
    setTodolist([...newTodos]);
  }
  return (
    <Box>
      <Box
        width={"30%"}
        h={"500px"}
        pos={"fixed"}
        top={"200px"}
        right={"35%"}
        shadow={"xl"}
        padding={"3rem"}
      >
        <Heading textAlign={"center"}>Todo App</Heading>
        <TodoInput setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList todos={todolist} handleDelete={handleDelete} />
      </Box>
    </Box>
  );
}

export default App;
