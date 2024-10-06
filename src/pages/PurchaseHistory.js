import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PurchaseHistory = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Lịch sử Giao dịch
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="paymenthistory-page" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Chi tiết giao dịch</h4>
              <table
                className="table table-bordered"
                style={{ marginTop: "30px" }}
              >
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Loại giao dịch</th>
                    <th>Giá</th>
                    <th>Tên tài khoản</th>
                    <th>Mật khẩu</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tài khoản 500K</td>
                    <td>500,000đ</td>
                    <td>Duc Duy</td>
                    <td className="position-relative">
                      {showPassword ? "duy1234" : "••••••"}
                      <button
                        onClick={togglePasswordVisibility}
                        className="btn btn-link p-0 position-absolute"
                        style={{
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </td>
                  </tr>
                  <tr>
                  <td>1</td>
                    <td>Tài khoản 400K</td>
                    <td>400,000đ</td>
                    <td>Nam Anh</td>
                    <td className="position-relative">
                      {showPassword ? "Nanh1234" : "••••••"}
                      <button
                        onClick={togglePasswordVisibility}
                        className="btn btn-link p-0 position-absolute"
                        style={{
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseHistory;
