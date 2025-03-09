import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function AddAssignmentButton() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleClick = () => {
    const newId = uuidv4(); // Generate a unique ID
    navigate(`/Kambaz/Courses/${cid}/Assignments/${newId}`);
  };

  return (
    <Button variant="danger" className="text-white" onClick={handleClick}>
      <FaPlus className="me-1" /> Assignment
    </Button>
  );
}