import React, { useEffect, useState } from "react";

export const FetchingData: React.FC = () => {
    // const initialTodo: {
    //   userId: number;
    //   id: number;
    //   title: string;
    //   completed: boolean;
    // } = {
    //   userId: 0,
    //   id: 1,
    //   title: "",
    //   completed: false,
    const initialTodo: {
        text: string;
        completed: boolean;
    } = {
        text: "",
        completed: false,
    };
    const [data, setData] = useState(initialTodo);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("JsonFile.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                if (data.text === undefined) {
                    return console.log("bug");
                }
            });
    }, []);

    return (
        <div className="">
            <h1 style={{ width: "30px", height: `30px`, color: "red" }}>
                {data.text}
            </h1>
            <p>{data.completed}</p>
        </div>
    );
};
