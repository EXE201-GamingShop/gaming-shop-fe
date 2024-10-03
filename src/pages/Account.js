import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";

const AccountPage = () => {
  const [user, setUser] = useState({
    email: "user1192944@example.com",
    facebookName: "---",
    id: "1192944",
    username: "Duc Duy",
    phone: "0987654321",
    walletMain: "500,000đ",
    joinDate: "03/10/2024",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu hiện tại và mật khẩu mới
    if (currentPassword === newPassword) {
      Swal.fire("Lỗi", "Mật khẩu mới không được trùng với mật khẩu hiện tại.", "error");
      return;
    }

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (newPassword !== confirmNewPassword) {
      Swal.fire("Lỗi", "Mật khẩu mới và nhập lại mật khẩu không khớp.", "error");
      return;
    }

    // Cập nhật thành công
    Swal.fire("Cập nhật thành công!", "Thông tin đã được cập nhật.", "success");
  };

  const handleInfoUpdate = (e) => {
    e.preventDefault();
    Swal.fire("Cập nhật thông tin thành công!", "Thông tin đã được cập nhật.", "success");
    setIsEditing(false); // Đóng form sau khi cập nhật
  };

  // Dữ liệu lịch sử giao dịch mẫu
  const transactionHistory = [
    // Uncomment the below line to test no transaction message
    // { date: "01/10/2024", name: "Liên Quân J143", amount: "200,000đ", status: "Thành công" },
    { date: "25/09/2024", name: "Liên Quân J142", amount: "150,000đ", status: "Thành công" },
    { date: "15/09/2024", name: "Liên Quân J141", amount: "300,000đ", status: "Thất bại" },
  ];

  return (
    <div>
      {/* Phần heading */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Thông tin tài khoản</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="account-page" style={{ marginTop: "50px" }}>
        <Container>
          <Row>
            {/* Phần thông tin cá nhân */}
            <Col lg={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Thông tin cá nhân</h5>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td>{user.facebookName}</td>
                      </tr>
                      <tr>
                        <td>ID</td>
                        <td>{user.id}</td>
                      </tr>
                      <tr>
                        <td>Tên tài khoản</td>
                        <td>{user.username}</td>
                      </tr>
                      <tr>
                        <td>Số điện thoại</td>
                        <td>{user.phone}</td>
                      </tr>
                      <tr>
                        <td>Ví chính</td>
                        <td style={{ color: "#0071f8" }}>{user.walletMain}</td>
                      </tr>
                      <tr>
                        <td>Ngày tham gia</td>
                        <td>{user.joinDate}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => setIsEditing(true)}
                  >
                    Cập nhật thông tin
                  </Button>
                </Card.Body>
              </Card>
              {/* Form cập nhật thông tin */}
              {isEditing && (
                <Card className="shadow-sm mt-3">
                  <Card.Body>
                    <h5>Cập nhật thông tin cá nhân</h5>
                    <Form onSubmit={handleInfoUpdate}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Facebook</Form.Label>
                        <Form.Control
                          type="text"
                          value={user.facebookName}
                          onChange={(e) => setUser({ ...user, facebookName: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Tên tài khoản</Form.Label>
                        <Form.Control
                          type="text"
                          value={user.username}
                          onChange={(e) => setUser({ ...user, username: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                          type="text"
                          value={user.phone}
                          onChange={(e) => setUser({ ...user, phone: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Button variant="success" type="submit" className="mt-3">
                        Lưu thay đổi
                      </Button>
                      <Button
                        variant="secondary"
                        className="mt-3 ms-2"
                        onClick={() => setIsEditing(false)}
                      >
                        Hủy
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              )}
            </Col>

            {/* Phần đổi mật khẩu */}
            <Col lg={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Đổi mật khẩu</h5>
                  <Form onSubmit={handleProfileUpdate}>
                    <Form.Group className="mb-3">
                      <Form.Label>Mật khẩu hiện tại</Form.Label>
                      <Form.Control
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mật khẩu mới</Form.Label>
                      <Form.Control
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                      <Form.Control
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Cập nhật
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Phần lịch sử giao dịch */}
          <Row className="mt-4">
            <Col lg={12}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Lịch sử giao dịch</h5>
                  {transactionHistory.length === 0 ? (
                    <p>Bạn chưa có giao dịch nào.</p> // Message when there are no transactions
                  ) : (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Ngày</th>
                          <th>Tên sản phẩm</th>
                          <th>Số tiền</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactionHistory.map((transaction, index) => (
                          <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.name}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AccountPage;
