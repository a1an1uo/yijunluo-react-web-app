import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <Nav className="flex-column bg-light p-3" id="wd-account-sidebar">
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz/Account/Profile">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz/Account/Signin">Sign In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz/Account/Signup">Sign Up</Nav.Link>
      </Nav.Item>
    </Nav>
);}

