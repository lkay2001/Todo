"use client"; // this is a client component 👈🏽

import React, { useEffect, useState } from "react";
import { TodoListItem } from "@component/components/taskBox/todoListItem";
import { TodoList } from "@component/components/todoList/todoList";
import { AddTodoForm } from "@component/components/addTodoForm/addTodoForm";
import { FetchingData } from "@component/components/fetchingData/fetchingData";

const initialTodos: Todo[] = [];
const Page: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (selectedTodo: Todo) => {
        console.log(selectedTodo);

        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }

            return todo;
        });
        setTodos(newTodos);
    };
    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false };
        setTodos([...todos, newTodo]);
    };
    return (
        <>
            {/*<TodoList todos={todos} toggleTodo={toggleTodo} />*/}
            {/*<AddTodoForm addTodo={addTodo} />*/}
            <FetchingData />
        </>
    );
};

export default Page;
