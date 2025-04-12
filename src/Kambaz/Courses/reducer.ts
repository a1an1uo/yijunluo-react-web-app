/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
const initialState = {
    courses: courses,
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },

    },
});
export const { updateCourse, setCourses, } =
    coursesSlice.actions;
export default coursesSlice.reducer;

