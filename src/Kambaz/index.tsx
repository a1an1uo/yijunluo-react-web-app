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
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import Session from "./Account/Session";
import * as userClient from "./Account/client";

export default function Kambaz() {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const [course, setCourses] = useState<any>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
            const course = await userClient.findMyCourses();
            setCourses(course);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...course, newCourse]);
        console.log("hihao")
    };


    const dispatch = useDispatch();

    const handleAddCourse = () => {
        dispatch(addCourse(course));
    };

    const handleDeleteCourse = (courseId: any) => {
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse(course));
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
                            setCourse={setCourses}
                            addNewCourse={addNewCourse}
                            deleteCourse={handleDeleteCourse}
                            updateCourse={handleUpdateCourse} /></ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>

    );
}

