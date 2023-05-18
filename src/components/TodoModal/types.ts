import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { Todo } from "../../types";

export type Props = {
    title:string,
    open: boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (value: Todo) => void;
    handleClose: (value:React.Dispatch<React.SetStateAction<boolean>>) => void;
    handleSubmit:UseFormHandleSubmit<Todo>;
    errors:FieldErrors<Todo>;
    control:any;
}