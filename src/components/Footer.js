import React from "react";

const Footer = () => {
  return (
    <footer style={{color: "white"}}>
      <div className="container">
        <div className="row" style={{paddingTop: "50px"}}>
          <div className="col-lg-4">
            <div className="section-heading">
              <img
                  src="assets/images/logo.png"
                  alt=""
                  style={{width: 300}}
              />
              <h5 style={{marginTop: "15px"}}>
                Shop bán acc game số 1 tại Việt Nam với các sản phẩm chất lượng và dịch vụ khách hàng tuyệt vời.
              </h5>
              <h5 style={{marginTop: "15px"}}>Hệ thống bán acc game chuyên nghiệp, cung cấp đa dạng tài khoản từ nhiều tựa
                game hot nhất hiện nay.</h5>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-heading">
              <h2>Thông tin chung</h2>
              <ul className="footer-list">
                <li>
                  <strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ
                </li>
                <li>
                  <strong>Điện thoại:</strong> (012) 345-6789
                </li>
                <li>
                  <strong>Email:</strong> support@example.com
                </li>
                <li>
                  <strong>Giờ làm việc:</strong> Thứ Hai - Thứ Sáu, 9:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-heading">
              <h2>Dịch vụ của chúng tôi</h2>
              <ul className="footer-list">
                <li>
                  <strong>Dịch vụ 1:</strong> Tư vấn và hỗ trợ khách hàng
                </li>
                <li>
                  <strong>Dịch vụ 2:</strong> Phát triển phần mềm tùy chỉnh
                </li>
                <li>
                  <strong>Dịch vụ 3:</strong> Đào tạo và hướng dẫn sử dụng
                </li>
                <li>
                  <strong>Dịch vụ 4:</strong> Bảo trì và cập nhật hệ thống
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
