import React, { useState } from "react";
import "../../CSS/home.css";

interface TaskProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TaskProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label
                style={{
                    textDecoration: todo.complete ? "line-through" : "",
                }}
            >
                <input
                    type={"checkbox"}
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                />
                {todo.text}
            </label>
        </li>
    );
};
