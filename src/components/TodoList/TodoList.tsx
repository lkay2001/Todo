import React from "react";
import { TodoListItem } from "@component/components/taskBox/todoListItem";

interface todoListProps {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<todoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};
