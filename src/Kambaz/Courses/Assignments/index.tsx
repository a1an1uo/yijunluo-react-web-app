import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import SearchBox from "./SearchBox";
import AddGroupButton from "./AddGroupButton";
import AddAssignmentButton from "./AddAssignmentButton";
import AssignmentControlButtons from "./AssignmentsControlButtons";

export default function Assignments() {
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
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                                <BsGripVertical className="me-2 fs-3" /> A1 <LessonControlButtons />
                                <div className="text-muted small">
                                    Due: 2025-02-10, Start: 09:00 AM, Points: 100
                                </div>
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link">
                                <BsGripVertical className="me-2 fs-3" /> A2 <LessonControlButtons />
                                <div className="text-muted small">
                                    Due: 2025-02-15, Start: 10:00 AM, Points: 100
                                </div>
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link">
                                <BsGripVertical className="me-2 fs-3" /> A3 <LessonControlButtons />
                                <div className="text-muted small">
                                    Due: 2025-02-20, Start: 11:00 AM, Points: 100
                                </div>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

