/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import KambazNavigation from "./Navigation";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client"
import * as enrollmentsClient from "./client"
import { enrollInCourse } from "./EnrollmentReducer";

export default function Kambaz() {
    // const { courses } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch();
    const [courses, setCourses] = useState<any>([]);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
            // const course = await userClient.findMyCourses();
            const courses = await courseClient.fetchAllCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);



    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(courses);
        setCourses([...courses, newCourse]);
        console.log("hihao")

        await enrollmentsClient.enrollUserInCourse(currentUser._id, newCourse._id);

        // Update Redux state
        dispatch(enrollInCourse({
            user: currentUser._id,
            course: newCourse._id
        }));
    };

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course: any) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c: any) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })
        );
    };

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} /></ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>

    );
}

