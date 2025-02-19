import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);

    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group controlId="wd-name" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" defaultValue={assignment?.title} />
                </Form.Group>
                <Form.Group controlId="wd-description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue={assignment?.description} />
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="wd-points" className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={assignment?.points} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="wd-due-date" className="mb-3">
                    <Form.Label column sm={2}>Due Date</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" defaultValue={assignment?.dueDate} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="wd-available-from" className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" defaultValue={assignment?.startTime} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="wd-available-until" className="mb-3">
                    <Form.Label column sm={2}>Available Until</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <Button variant="secondary" className="me-2">Cancel</Button>
                        </Link>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <Button type="submit">Save Assignment</Button>
                        </Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}