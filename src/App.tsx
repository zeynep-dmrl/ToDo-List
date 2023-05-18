import { useState, createContext } from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { Container } from "@mui/material";

import { Todo, TodoContextType } from "./types";

import "./App.css";

export const AppContext = createContext<TodoContextType>({
  todos: [],
  filteredTodos: [],
  setTodos: () => [],
  updateTodos: () => void {},
  deleteTodo: () => void {},
});

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todoList);

  const handleSave = (item: Todo) => {
    setTodoList((prevTodos) => [...prevTodos, item]);
    return todoList;
  };

  const handleUpdate = (item: Todo[]) => {
    setTodoList(item);
  };

  const handleDelete = (item: Todo[]) => {
    setFilteredTodos(item);
    setTodoList(item);
  };

  return (
    <AppContext.Provider
      value={{
        todos: todoList,
        filteredTodos: filteredTodos,
        setTodos: handleSave,
        updateTodos: handleUpdate,
        deleteTodo: handleDelete,
      }}
    >
      <Container sx={{ bgcolor: "#FFFBFE", height: "100%" }} maxWidth="sm">
        <TodoForm />
        <TodoList />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
