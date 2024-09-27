import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <Container>
        <Row>
          <Col>
            <nav className="main-nav">
              <Nav.Link as={NavLink} to={"/"} className="logo">
                <img
                  src="assets/images/logo.png"
                  alt=""
                  style={{ width: 158 }}
                />
              </Nav.Link>
              <ul className="nav">
                <li>
                  <Nav.Link as={NavLink} to={"/"} className="active">
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/shop"}>
                    Our shop
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/contact"}>
                    Contact Us
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/login"}>
                    Sign In
                  </Nav.Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
