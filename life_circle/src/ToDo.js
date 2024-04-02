import {useEffect, useState} from "react";
import axios from "axios";

export function ToDo() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
            let data = response.data;
            setTodo(data);
        })
    }, []);

    // useEffect(() => { // Did mount và did update
    //     console.log("2")
    // })

    // useEffect(() => { // Did mount và did update (có điều kiện)
    //     console.log("3")
    // }, [todo]);

    useEffect(() => {
        console.log("4")
        return () => {
        }
    })
    return (
        <>
            ID: {todo.id}, Title: {todo.title}
        </>
    )
}