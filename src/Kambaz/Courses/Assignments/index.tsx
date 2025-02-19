import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import SearchBox from "./SearchBox";
import AddGroupButton from "./AddGroupButton";
import AddAssignmentButton from "./AddAssignmentButton";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between mb-3">
                <SearchBox placeholder="Search for Assignments" />
                <div className="d-flex ms-3">
                    <AddGroupButton />
                    <AddAssignmentButton />
                </div>
            </div>
            <br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assignment) => assignment.course === cid)
                            .map((assignment) => (
                                <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                                        <BsGripVertical className="me-2 fs-3" /> {assignment.title} <LessonControlButtons />
                                        <div className="text-muted small">
                                            Due: {assignment.dueDate}, Start: {assignment.startTime}, Points: {assignment.points}
                                        </div>
                                    </Link>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}