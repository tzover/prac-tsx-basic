import React, { useState, useCallback } from "react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";
import { Child1 } from "./Child1";
import { Router } from "./components/router/Router";

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const App = () => {
    console.log("parent");
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const onChangeText = (e) => setText(e.target.value);
    const onClickOpen = () => setOpen(!open);
    const onClickClose = useCallback(() => setOpen(false), []);

    const [todos, setTodos] = useState<Array<TodoType>>([]);

    const onClickGetData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err));
    };

    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/todos")
    //         .then((res) => setTodos(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

    // const history = useHistory();
    // console.log(`history: ${history}`);
    // const onClickToPage3 = () => history.push("/page3");
    return (
        <div>
            <BrowserRouter>
                <Link to="/">
                    <div>Hello</div>
                </Link>
                <Link to="/page1">
                    <div>Hello page1</div>
                </Link>
                <Link to="/page2">
                    <div>Hello page2</div>
                </Link>
                <Link to={{ pathname: "page3", state: true }}>
                    <div>Hello page3</div>
                </Link>
                {/* <button type="button" onClick={onClickToPage3}>
        //             next Page 3
        //         </button> */}
                <br />
                <br />
                <Router />
            </BrowserRouter>

            {/* <div> */}
            <h1>Hello</h1>
            <input
                type="text"
                placeholder="入力してください"
                value={text}
                onChange={onChangeText}
            />
            <button type="button" onClick={onClickOpen}>
                Open
            </button>
            <Child1 open={open} onClickClose={onClickClose} />

            <BrowserRouter>
                <button type="button" onClick={onClickGetData}>
                    GetData
                </button>
                {todos &&
                    todos.map((todo) => (
                        <Link key={todo.id} to={todo.id.toString()}>
                            {todo.title}
                        </Link>
                    ))}
            </BrowserRouter>
        </div>
    );
};

// API
// unsplash
// jsonplaceholder
// rakuten
// chakra ui

export default App;
