/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { enrollInCourse, unenrollFromCourse } from "./EnrollmentReducer";

export default function Dashboard({
    courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse
}: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer)

    const [show, setShow] = useState(false);
    const showAllCourses = () => {
        setShow(!show)
    }

    const handleEnroll = (event: React.MouseEvent, courseId: string) => {
        event.preventDefault();
        dispatch(enrollInCourse({
            user: currentUser._id,
            course: courseId
        }));
    };

    const handleUnenroll = (event: React.MouseEvent, courseId: string) => {
        event.preventDefault();
        dispatch(unenrollFromCourse({
            user: currentUser._id,
            course: courseId
        }));
    };

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === courseId
        );
    };

    const handleCourseNavigation = (event: React.MouseEvent, courseId: string) => {
        event.preventDefault();
        if (currentUser.role === "STUDENT" && !isEnrolled(courseId)) {
            // Prevent navigation if student is not enrolled
            return;
        }
        navigate(`/Kambaz/Courses/${courseId}/Home`);
    };

    const displayCourses = show
        ? courses // When show is true, display all courses
        : courses.filter((course) =>
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        );

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "FACULTY" ? (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                            id="wd-update-course-click"
                            onClick={updateCourse}> Update </button>
                    </h5><br />
                    <FormControl
                        value={course.name}
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        className="mb-2"
                        placeholder="Course Name"
                    />
                    <FormControl
                        value={course.description}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        as="textarea"
                        rows={3}
                        placeholder="Course Description"
                    />
                    <hr />
                </>
            ) : (<button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={showAllCourses}> Enrollments </button>)}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {displayCourses.map((course) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                {currentUser.role === "STUDENT" && (
                                    isEnrolled(course._id) ? (
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={(event) => handleUnenroll(event, course._id)}
                                        >
                                            Unenroll
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="success"
                                            size="sm"
                                            onClick={(event) => handleEnroll(event, course._id)}
                                        >
                                            Enroll
                                        </Button>
                                    )
                                )}
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
                                    onClick={(event) => {
                                        if (currentUser.role === "STUDENT" && !isEnrolled(course._id)) {
                                            event.preventDefault(); // Prevent navigation if student is not enrolled
                                            return;
                                        }
                                    }}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <Card.Img src={course.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                                            {course.description} </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                className="me-3"
                                                onClick={(event) => handleCourseNavigation(event, course._id)}
                                            >
                                                Go
                                            </Button>
                                            {currentUser?.role === "FACULTY" && (
                                                <>
                                                    <Button
                                                        variant="warning"
                                                        size="sm"
                                                        className="me-2"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        id="wd-edit-course-click"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        size="sm"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}
                                                        id="wd-delete-course-click"
                                                    >
                                                        Delete
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}