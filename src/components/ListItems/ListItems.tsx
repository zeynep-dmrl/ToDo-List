import {
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import Props from "./types";

const ListItems = ({
  todo,
  handleDelete,
  handleToggle,
  handleClickOpen,
}: Props) => {
  return (
    <ListItem
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        border: 1,
        borderColor: "primary.contrastText",
        borderRadius: 2,
      }}
      key={todo.id}
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleDelete(todo.id)}
          >
            <DeleteIcon sx={{ color: "primary.contrastText" }} />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={(e) => handleClickOpen(todo)}
          >
            <CreateIcon sx={{ color: "primary.contrastText" }} />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton onClick={() => handleToggle(todo)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.status}
            inputProps={{ "aria-labelledby": todo.id }}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.task} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItems;
