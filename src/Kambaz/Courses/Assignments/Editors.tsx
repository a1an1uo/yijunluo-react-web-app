import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group controlId="wd-name" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" placeholder="A1 - ENV + HTML" />
                </Form.Group>
                <Form.Group controlId="wd-description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue="The assignment is available online. Submit a link to the landing 
                    page of your project." />
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="wd-points" className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={100} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-due-date" className="mb-3">
                    <Form.Label column sm={2}>Due Date</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-available-from" className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" />
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
                        <Button type="submit">Save Assignment</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

