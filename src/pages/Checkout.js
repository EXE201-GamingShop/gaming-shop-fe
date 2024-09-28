import React from "react";
import Swal from "sweetalert2";

const Checkout = () => {

  const handleQRCodeClick = () => {
    const username = "jonedoe123";
    const password = "JohnDoe123!";

    Swal.fire({
      title: "Thanh toán thành công",
      icon: "success",
      html: `
        <p><strong>Username:</strong> ${username}</p>
        <div style="position: relative;">
          <p><strong>Password:</strong> <span id="password-text">********</span>
          <i id="toggle-password" class="fa fa-eye" style="position: absolute; top: 50%; right: 10px; cursor: pointer; transform: translateY(-50%);"></i>
          </p>
        </div>
      `,
      showConfirmButton: true,
      didOpen: () => {
        const passwordText = document.getElementById("password-text");
        const togglePasswordIcon = document.getElementById("toggle-password");

        let isPasswordHidden = true; // Mật khẩu ban đầu bị ẩn

        togglePasswordIcon.addEventListener("click", () => {
          if (isPasswordHidden) {
            passwordText.textContent = password; // Hiện mật khẩu
            togglePasswordIcon.classList.remove("fa-eye");
            togglePasswordIcon.classList.add("fa-eye-slash");
          } else {
            passwordText.textContent = "********"; // Ẩn mật khẩu
            togglePasswordIcon.classList.remove("fa-eye-slash");
            togglePasswordIcon.classList.add("fa-eye");
          }
          isPasswordHidden = !isPasswordHidden; // Đảo trạng thái hiển thị mật khẩu
        });
      },
    });
  };

  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Check Out</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="checkout-page" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-form">
                <div className="row">
                  <div className="col-12">
                    <h4>Order Summary</h4>

                    <table className="table table-bordered" style={{ marginTop: "30px" }}>
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                          <th scope="col">Subtotal</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <a href="#">Liên Quân J143</a>
                          </td>
                          <td>1</td>
                          <td>320,000đ</td>
                          <td>320,000đ</td>
                        </tr>

                        <tr>
                          <td colSpan="3" className="text-right">
                            Discount
                          </td>
                          <td style={{ color: "red" }}>0%</td>
                        </tr>

                        <tr>
                          <td colSpan="3" className="text-right">
                            Total
                          </td>
                          <td style={{ color: "#0071f8" }}>320,000đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="more-info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="qr-code" id="qr-code" onClick={handleQRCodeClick}>
                        <img src="assets/images/qr-code.jpg" alt="QR Code"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Checkout;