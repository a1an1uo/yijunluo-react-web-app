/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client"

export default function AssignmentEditor() {
    const dispatch = useDispatch();
    const { cid, aid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.assignments.find((assignment: any) => assignment._id === aid);

    const [title, setTitle] = useState(assignment?.title || "");
    const [description, setDescription] = useState(assignment?.description || "");
    const [points, setPoints] = useState(assignment?.points || 0);
    const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
    const [startTime, setStartTime] = useState(assignment?.startTime || "");


    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {
            title,
            description,
            points,
            dueDate,
            startTime,
            course: cid,
        };
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    const modifyAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const saveAssignment = () => {
        const assignmentData = {
            _id: aid,
            title,
            description,
            points,
            dueDate,
            startTime,
            course: cid,
        };

        if (assignment) {
            modifyAssignment(assignmentData);
        } else {
            createAssignmentForCourse();
        }
    };

    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group controlId="wd-name" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="wd-description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="wd-points" className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="wd-due-date" className="mb-3">
                    <Form.Label column sm={2}>Due Date</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="wd-available-from" className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="date"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <Button variant="secondary" className="me-2">Cancel</Button>
                        </Link>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <Button type="submit" onClick={saveAssignment}>
                                Save Assignment
                            </Button>
                        </Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}