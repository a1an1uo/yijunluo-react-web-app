import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; // Adjust the import path as needed
import { useParams } from "react-router";

export default function LessonControlButtons() {
    const dispatch = useDispatch();
    const aid = useParams();

    const handleDelete = () => {
        dispatch(deleteAssignment(aid));
    };

    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}