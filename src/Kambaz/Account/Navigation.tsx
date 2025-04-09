/* eslint-disable @typescript-eslint/no-explicit-any */
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  // Create basic links based on authentication status
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // Add Users link if user has ADMIN role
  if (currentUser && currentUser.role === "ADMIN") {
    links.push("Users");
  }

  return (
    <Nav className="flex-column bg-light p-3" id="wd-account-sidebar">
      {links.map((link) => (
        <Nav.Item key={link}>
          <Nav.Link
            as={Link}
            to={`/Kambaz/Account/${link}`}
            active={pathname === `/Kambaz/Account/${link}` ||
              (link === "Users" && pathname.includes("/Kambaz/Account/Users"))}
          >
            {link.replace(/([A-Z])/g, ' $1').trim()}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}