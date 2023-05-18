import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { AppContext } from "../../App";
import { Todo } from "../../types";

import { IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";
import SearchForm from "../SearchForm/SearchForm";
import TodoModal from "../TodoModal/TodoModal";
import { handleClickOpen, handleClose } from "./utils";

const TodoForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const defaultValues = {
    id: undefined,
    task: "",
    status: false,
  };

  const v4Id = uuidv4();

  const { setTodos } = useContext(AppContext);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Todo>({ defaultValues });

  const onSubmit: SubmitHandler<Todo> = (data) => {
    setTodos({ id: v4Id, task: data.task, status: false });
    reset(defaultValues);
    handleClose(setOpen);
  };

  return (
    <Box
      className="container"
      style={{
        backgroundColor: "rgb(234 128 252 / 20%)",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <SearchForm />

      <IconButton
        aria-label="delete"
        sx={{ backgroundColor: "primary.dark" }}
        style={{ marginLeft: 5 }}
        onClick={(e) => handleClickOpen(setOpen)}
      >
        <AddIcon sx={{ color: "primary.contrastText" }} />
      </IconButton>

      <TodoModal
        title={"Add New Todo"}
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

export default TodoForm;
