import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function AddGroupButton() {
    return (
        <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
        </Button>
    );
}