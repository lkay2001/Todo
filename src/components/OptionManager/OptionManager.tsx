import React from "react";
import { TodoList } from "@component/components/todoList/todoList";
import Link from "next/link";

// interface OptionManagerProps {
//   todos: Todo[];
//   toggleTodo: ToggleTodo;
// }

export const OptionManager: React.FC = () => {
    const optionArray: { option: string }[] = [
        { option: "Todos" },
        { option: "TimeTable" },
        { option: "TimeTable" },
        { option: "TimeTable" },
    ];
    return (
        <div className="options-container">
            {optionArray.map((option, index) => (
                <div className="options-elements" key={index}>
                    <Link href="addTodoPage">{option.option}</Link>
                </div>
            ))}
        </div>
    );
};
