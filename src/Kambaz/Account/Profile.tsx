import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control id="wd-username" defaultValue="alice" placeholder="username" className="mb-2" /><br />
      <Form.Control id="wd-password" defaultValue="123" placeholder="password" type="password" className="mb-2" /><br />
      <Form.Control id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2" /><br />
      <Form.Control id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="mb-2" /><br />
      <Form.Control id="wd-dob" defaultValue="2000-01-01" type="date" className="mb-2" /><br />
      <Form.Control id="wd-email" defaultValue="alice@wonderland" type="email" placeholder="Email" className="mb-2" /><br />
      <Form.Control as="select" defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Control><br />
      <Link id="wd-signout-btn" to="/Kambaz/Account/Signin" className="btn btn-primary w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}

