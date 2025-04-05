/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const findEnrollmentsForUser = async (user: any) => {
    const response = await axios.get(`${ENROLLMENTS_API}/user/${user._id}`);
    return response.data;
};

export const enrollUserInCourse = async (userId: any, courseId: any) => {
    const { data } = await axios.post(`${ENROLLMENTS_API}/user/${userId}/course/${courseId}`);
    return data;
};

export const unenrollUserFromCourse = async (userId: any, courseId: any) => {
    const { data } = await axios.delete(
        `${ENROLLMENTS_API}/user/${userId}/course/${courseId}`
    );
    return data;
};