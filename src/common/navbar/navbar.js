import {
  Nav,
  Navbar,
  Container,
  Image,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../theme/theme";
import style from "./css/style.module.css";
import { useState } from "react";
import {
  DEFAULT_USER_PICTURE,
  ICON_MODERNA,
  Transition,
  ROUTES,
} from "../../imports";
import { BiExit as Exit } from "react-icons/bi";

export default function Header({ sessionUser, setSessionUser }) {
  const location = useLocation().pathname;
  const handlePageTitle = (e) => {
    document.title = e;
  };
  return (
    <Navbar
      style={{
        backgroundColor: COLORS.MODERNA_RED,
        minHeight: 60,
        zIndex: 999,
      }}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img src="https://img.freepik.com/vector-gratis/elegir-alimentos-saludables-o-no-saludables_23-2148580850.jpg?w=740&t=st=1683670716~exp=1683671316~hmac=6fe72bbc9957eeee7408e67269567f893e5726338ca090fbfdc6c384975ae5b5" alt="Logo" width="100" height="100" />
      </Navbar.Brand>
      <Container fluid style={{ marginInline: "1rem" }}>
        <Navbar.Brand href="#home">manan kallari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.canva.com/design/DAFfMl1xJgw/bezlFtEUf8nKM6kQHAf7Vw/edit?utm_content=DAFfMl1xJgw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              Conoce mas sobre nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
