import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, FormControl } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todo = useSelector((state: any) => state.todosReducer.todo);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="me-2"
        placeholder="Todo Title"
      />
      <Button onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        variant="warning"
        className="me-2"> Update </Button>
      <Button onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        variant="success"> Add </Button>
    </ListGroup.Item>
  );
}