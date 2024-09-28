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
                  style={{ width: 300 }}
                />
              </Nav.Link>
              <ul className="nav">
                <li>
                  <Nav.Link as={NavLink} to={"/"} className="active">
                    Trang chủ
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/shop"}>
                    Sản phẩm
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/checkout"}>
                    Nạp tiền
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/contact"}>
                    Hỗ trợ
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
