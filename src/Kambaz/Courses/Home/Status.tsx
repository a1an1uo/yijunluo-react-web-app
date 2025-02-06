import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { BiImport, BiExport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
                    </Button>
                </div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish
                    </Button>
                </div>
            </div>
            <br />
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiExport className="me-2 fs-5" /> Export Course Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaRegEdit className="me-2 fs-5" /> Edit Course Details
            </Button>
            <Button variant="danger" size="lg" className="w-100 mt-1 text-start">
                <FaTrashAlt className="me-2 fs-5" /> Delete Course
            </Button>
        </div>
    );
}