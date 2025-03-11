import { Modal, Button } from "react-bootstrap";
export default function DeleteDialog({ show, handleClose, dialogTitle, assignmentId, deleteAssignment, }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string; deleteAssignment: (name: string) => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> No </Button>
                <Button variant="primary"
                    onClick={() => {
                        deleteAssignment(assignmentId);
                        handleClose();
                    }} > Yes </Button>
            </Modal.Footer>
        </Modal>
    );
}

