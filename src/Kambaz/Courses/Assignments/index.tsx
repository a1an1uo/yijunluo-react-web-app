/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./AssignmentLessonControlButtons";
import SearchBox from "./SearchBox";
import AddGroupButton from "./AddGroupButton";
import AddAssignmentButton from "./AddAssignmentButton";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between mb-3">
                <SearchBox placeholder="Search for Assignments" />
                {currentUser?.role === 'FACULTY' && (
                    <div className="d-flex ms-3">
                        <AddGroupButton />
                        <AddAssignmentButton />
                    </div>
                )}
            </div>
            <br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
                        {currentUser?.role === 'FACULTY' && <AssignmentControlButtons />}
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                                    {currentUser?.role === 'FACULTY' &&
                                        (<LessonControlButtons assignmentId={assignment._id}
                                            deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />)}
                                    {currentUser.role === 'FACULTY' ? (
                                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                                            <BsGripVertical className="me-2 fs-3" /> {assignment.title}
                                            <div className="text-muted small">
                                                Due: {assignment.dueDate}, Start: {assignment.startTime}, Points: {assignment.points}
                                            </div>
                                        </Link>) : (<div className="wd-assignment-link">
                                            <BsGripVertical className="me-2 fs-3" /> {assignment.title}
                                            <div className="text-muted small">
                                                Due: {assignment.dueDate}, Start: {assignment.startTime}, Points: {assignment.points}
                                            </div>
                                        </div>)}
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}