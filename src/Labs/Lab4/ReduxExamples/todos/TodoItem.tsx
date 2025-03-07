import { useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TodoItem({ todo }: { todo: any }) {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <div>
                <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className="me-2"> Edit </Button>
                <Button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" variant="danger"> Delete </Button>
            </div>
        </ListGroup.Item>
    );
}