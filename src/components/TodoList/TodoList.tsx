import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { List, Box } from "@mui/material";
import "./styles.css";
import { Todo } from "../../types";
import ListItems from "../ListItems/ListItems";
import TodoModal from "../TodoModal/TodoModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleClickOpen, handleClose } from "./utils";

const TodoList = () => {
  const { setTodos, updateTodos, deleteTodo, todos } = useContext(AppContext);

  const [open, setOpen] = useState<boolean>(false);

  const [defaultValues, setDefaultValues] = useState<Todo>({
    id: "",
    task: "",
    status: false,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<Todo>({ defaultValues });

  const handleOpen = (value: Todo) => {
    setDefaultValues(value);
    setValue("task", value.task);
    handleClickOpen(setOpen);
  };

  const onSubmit: SubmitHandler<Todo> = (data) => {
    const currentIndex = todos.findIndex((i) => i.id === defaultValues.id);
    const newTodos = [...todos];

    if (currentIndex === -1) {
      newTodos.push(defaultValues);
    } else {
      newTodos.splice(currentIndex, 1, {
        id: defaultValues.id,
        task: data.task,
        status: defaultValues.status,
      });
    }
    updateTodos(newTodos);

    handleClose(setOpen);
  };

  const handleToggle = (value: Todo) => {
    const currentIndex = todos.findIndex((i) => i.id === value.id);
    const newTodos = [...todos];

    if (currentIndex === -1) {
      newTodos.push(value);
    } else {
      newTodos.splice(currentIndex, 1, {
        id: value.id,
        task: value.task,
        status: !value.status,
      });
    }

    updateTodos(newTodos);
  };

  const handleDelete = (value: string | number) => {
    const filterTodos = todos.filter((todo) => todo.id !== value);
    deleteTodo(filterTodos);
  };

  return (
    <Box className="container">
      <List sx={{ width: "100%" }}>
        {todos?.map((todo) => (
          <ListItems
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            handleClickOpen={handleOpen}
          />
        ))}
      </List>

      <TodoModal
        title={"Edit Todo"}
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
      />
    </Box>
  );
};

export default TodoList;
