import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Props } from "./types";

const TodoModal = ({
  title,
  onSubmit,
  open,
  setOpen,
  handleClose,
  handleSubmit,
  errors,
  control,
}: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box className="form">
          <Controller
            name="task"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                sx={{ color: "primary.dark" }}
                focused
                autoFocus
              />
            )}
          />
          {errors.task && (
            <span className="error-message">This field is required</span>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={{ color: "primary.dark" }}
          onClick={() => handleClose(setOpen)}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "primary.dark" }}
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoModal;
