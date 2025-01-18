import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">Course 1: Introduction to Programming</div>
                <div className="wd-dashboard-course">Course 2: Data Structures</div>
                <div className="wd-dashboard-course">Course 3: Web Development</div>
                <div className="wd-dashboard-course">Course 4: Database Management</div>
                <div className="wd-dashboard-course">Course 5: Machine Learning</div>
                <div className="wd-dashboard-course">Course 6: Cybersecurity</div>
                <div className="wd-dashboard-course">Course 7: Cloud Computing</div>
            </div>
        </div>
    );
}

