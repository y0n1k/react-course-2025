import {ITodo} from "../models/ITodo.ts";
import TodoComponent from "./TodoComponent.tsx";
import {useEffect, useState} from "react";

const TodoComponents = () => {
    const [todos, setTodo] = useState<ITodo[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((value) => {
                setTodo(value);
            });
    }, [])
    return (
        todos.map(value => <TodoComponent key={value.id} item={value}/>)
    );
};

export default TodoComponents;