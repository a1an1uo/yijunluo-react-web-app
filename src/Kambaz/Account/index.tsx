import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin"
import Signup from "./Signup";

export default function Account() {
    return
    <div>
        <h2>Account</h2>
        <Routes>
            <Route path="Signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Profile" element={<Profile />} />
        </Routes>
    </div>
}