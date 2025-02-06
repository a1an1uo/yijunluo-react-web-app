import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function AddAssignmentButton() {
  return (
    <Button variant="danger" className="text-white">
      <FaPlus className="me-1" /> Assignment
    </Button>
  );
}