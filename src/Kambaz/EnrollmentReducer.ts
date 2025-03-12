import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollInCourse: (state, action) => {
            const { user, course } = action.payload;

            // Check if already enrolled to prevent duplicates
            const isAlreadyEnrolled = state.enrollments.some(
                enrollment => enrollment.user === user && enrollment.course === course
            );

            if (!isAlreadyEnrolled) {
                state.enrollments.push({
                    _id: new Date().getTime().toString(), // Generate a unique ID
                    user,
                    course
                });
            }
        },

        unenrollFromCourse: (state, action) => {
            const { user, course } = action.payload;

            state.enrollments = state.enrollments.filter(
                enrollment => !(enrollment.user === user && enrollment.course === course)
            );
        }
    },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;