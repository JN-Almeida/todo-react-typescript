export type Todo = {
    text: string;
    complete: boolean;
};

export type ToggleTodo = (seletedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;
