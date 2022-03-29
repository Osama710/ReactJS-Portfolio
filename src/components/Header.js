import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="header-heading">
          Navbar
        </Navbar.Brand>
        <Nav className="ml-auto header-data">
          {/* <Nav.Link exact href="/">
            Home
          </Nav.Link> */}
          {/* <Nav.Link href="/MyStory">About</Nav.Link> */}
          {/* <Nav.Link href="/MyServices">Services</Nav.Link>
          <Nav.Link href="/MySkills">Skills</Nav.Link>
          <Nav.Link href="/MyContact">Contact</Nav.Link> */}
          <HashLink smooth to={"/MyStory#home"} className="navigationlink">
            Home
          </HashLink>
          <HashLink smooth to={"/MyStory#about"} className="navigationlink">
            About
          </HashLink>
          <HashLink smooth to={"/page#service"} className="navigationlink">
            Services
          </HashLink>
          <HashLink smooth to={"/page#skill"} className="navigationlink">
            Skills
          </HashLink>
          <HashLink smooth to={"/page#contact"} className="navigationlink">
            Contact
          </HashLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
