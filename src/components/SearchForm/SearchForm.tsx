import { ChangeEvent, useContext, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../../App";

import "../TodoForm/styles.css";

type SearchForm = {
  search: string;
};

const SearchForm = () => {
  const { todos, updateTodos } = useContext(AppContext);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  console.log(filteredTodos);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SearchForm>();

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    const searchResult = todos.find((todo) => todo.task.includes(data.search));
  };

  const handleOnChange = (e: ChangeEvent) => {
    setFilteredTodos(todos);

    if (e.target.value) {
      const searchResult = todos.filter((todo) =>
        todo.task.includes(e.target.value)
      );

      updateTodos(searchResult);
    } else {
      updateTodos(filteredTodos);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="search"
        control={control}
        rules={{ validate: () => todos.length === 0 }}
        render={({ field: { onChange } }) => (
          <TextField
            onChange={(e) => handleOnChange(e)}
            sx={{ color: "primary.dark" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {errors.search?.type === "validate" && (
        <span className="error-message">Todos not exist</span>
      )}
    </form>
  );
};

export default SearchForm;
