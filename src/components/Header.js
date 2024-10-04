import React, { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { user, setUser, account } = props;

  const fetchUserInfo = async () => {
    if (user) return;
    await account.get().then((user) => {
      console.log('>>> User: ', user);
      setUser(user);
    }).catch((err) => {
      console.error('Error while login: ', err);
    });
  }

  useEffect(() => {
    fetchUserInfo();
  }, [user]);

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
                  <Nav.Link as={NavLink} to={"/"} className="active fw-bold">
                    Trang chủ
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/shop"} className="active fw-bold">
                    Sản phẩm
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/checkout"} className="active fw-bold">
                    Nạp tiền
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/contact"} className="active fw-bold">
                    Hỗ trợ
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to={"/login"} className="active">
                    Đăng nhập
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
