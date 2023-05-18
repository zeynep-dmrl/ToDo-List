export type Todo = {
    id:string;
    task:string;
    status:boolean;
}

export type TodoContextType = {
    todos:Todo[];
    filteredTodos:Todo[];
    setTodos: (todo: Todo) => Todo[],
    updateTodos: (todos:Todo[]) => void,
    deleteTodo:(todos:Todo[]) => void,
}