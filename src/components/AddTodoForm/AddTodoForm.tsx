import React, { useState } from "react";

interface addTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<addTodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState("");
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    setText("");
                }}
            >
                Add Todo
            </button>
        </form>
    );
};
