
import { Todo } from "../../types";

type Props = {
    todo:Todo;
    handleDelete: (item:string) => void;
    handleToggle: (value:Todo) => void;
    handleClickOpen:(value:Todo) => void;
}

export default Props;