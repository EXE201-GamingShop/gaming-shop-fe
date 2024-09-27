import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
  Card,
} from "react-bootstrap";
import { Client, Account, OAuthProvider } from "appwrite";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Registration attempt with:", { username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const googleAuth = () => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

    const account = new Account(client);

    const host = process.env.NODE_ENV === "production" ? "https://shopdichvugame.vercel.app" : "http://localhost:3000";

    account.createOAuth2Session(
      OAuthProvider.Google,
      host,
      host,
    );
  };

  return (
    <>
      <div className="page-heading header-text">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h3>Đăng ký</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt; Đăng ký
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section py-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="mb-4 text-center">Create an Account</h4>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username" className="mb-3">
                      <Form.Label>Tên đăng nhập</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên tài khoản..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        isInvalid={!!error}
                      />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Nhập địa chỉ email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!error}
                      />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                      <Form.Label>Mật khẩu</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!error}
                      />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" className="mb-3">
                      <Form.Label>Xác nhận mật khẩu</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Nhập lại mật khẩu..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        isInvalid={!!error}
                      />
                    </Form.Group>

                    {error && (
                      <Alert variant="danger" className="text-center">
                        {error}
                      </Alert>
                    )}

                    <p className="mb-4 text-center">
                      Đã có tài khoản?{" "}
                      <Link to="/login">
                        <strong>Đăng nhập</strong>
                      </Link>
                    </p>

                    <div className="d-grid mb-3">
                      <Button variant="primary" type="submit" className="py-2">
                        Đăng ký
                      </Button>
                    </div>

                    <div className="d-grid">
                      <Button
                        variant="outline-secondary"
                        className="d-flex align-items-center justify-content-center py-2"
                        onClick={googleAuth}
                      >
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                          alt="Google logo"
                          className="me-2"
                          style={{ width: "20px", height: "20px" }}
                        />
                        Đăng ký với Google
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;