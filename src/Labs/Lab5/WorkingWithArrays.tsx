// import { useEffect, useState } from "react";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    console.log(todo.completed)
    // interface TodoResponse {
    //     id: string;
    //     title: string;
    //     completed: boolean;
    //     description: string;
    //     due: string;
    //   }


    //   const fetchTodo = async (id: string): Promise<void> => {
    //     try {
    //       const response = await fetch(`${API}/${id}`);
    //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    //       const rawData: TodoResponse = await response.json();
    //       console.log(rawData)
    //       const Todo = {
    //         id: rawData.id,
    //         title: rawData.title,
    //         completed: rawData.completed,
    //         description: "",
    //         due: ""
    //       };

    //       setTodo(Todo);
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //     }
    //   };

    // useEffect(() => {
    //     fetchTodo("1");
    // }, []);
    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a><hr />
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h3>Filtering Array Items</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}?completed=true`}>
                Get Completed Todos
            </a><hr />
            <h3>Creating new Items in an Array</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}/create`}>
                Create Todo
            </a><hr />
            <h3>Deleting from an Array</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <FormControl defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
                Update Todo</a>
            <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <FormControl defaultValue={todo.title} className="w-50 float-start"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
            <br /><br /><hr />
            <h4>Update Completed Status</h4>
            <h6 className="text-danger" >Bug: The checked attribute will go back to false every time you go from server back to web app(because it is 
                set to be todo.completed and todo is a local const that set its completed to be false) but the checkbox will remain checked</h6>
            <h6 className="text-danger" >Solution to the bug: click the box and click it again to make the checked to be true</h6>
            <a
                id="wd-update-completed"
                className="btn btn-primary float-end"
                href={`${API}/${todo.id}/completed/${todo.completed}`}
            >
                Toggle Completed Status
            </a>
            <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
                {JSON.stringify(todo.completed)}
                <input checked={todo.completed} type="checkbox"/>
            <Form.Check
                type="checkbox"
                id="wd-completed-checkbox"
                label="Completed"
                checked={todo.completed}
                onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
                className="w-50 float-start"
            /><br /><br /><hr />

            <h4>Update Description</h4>
            <a
                id="wd-update-description"
                className="btn btn-primary float-end"
                href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
            >
                Update Description
            </a>
            <FormControl
                id="wd-todo-description"
                value={todo.description}
                className="w-50"
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                placeholder="Enter todo description"
            />
            <hr />

        </div>
    );
}

