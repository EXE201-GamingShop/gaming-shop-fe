import React from "react";
import { MainBanner } from "../components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <MainBanner />
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/introduction.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Giới thiệu</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/featured-02.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Tài khoản</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/information-sign.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Thông tin</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="https://t.me/checkscam_vn">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/featured-04.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Check giao dịch</h4>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-12 mt-5">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/money-transfer.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Giao dịch trung gian</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <a href="#">
                <div className="item">
                  <div className="image">
                    <img
                      src="assets/images/support.png"
                      alt=""
                      style={{ maxWidth: 44 }}
                    />
                  </div>
                  <h4>Hỗ trợ tài khoản game</h4>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="section trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6></h6>
                <h2>Sản phẩm đang hot</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/shop">Xem tất cả</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <Link to="/product-details">
                    <img src="assets/images/lq5.gif" alt="" />
                  </Link>
                </div>
                <div className="down-content">
                  <h4>Account đang sale</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <Link to="/product-details">
                    <img src="assets/images/lq2.gif" alt="" />
                  </Link>
                </div>
                <div className="down-content">
                  <h4>Account giá rẻ</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <Link to="/product-details">
                    <img src="assets/images/lq3.gif" alt="" />
                  </Link>
                </div>
                <div className="down-content">
                  <h4>Account trắng thông tin</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <Link to="/product-details">
                    <img src="assets/images/lq1.gif" alt="" />
                  </Link>
                </div>
                <div className="down-content">
                  <h4>Săn quân huy</h4>
                  <Link to="/product-details">
                    <i className="fa fa-shopping-bag" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>Tin tức</h6>
                <h2>Tin tức mới nhất</h2>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="main-button">
                  <Link to="/">Xem tất cả</Link>
                </div>
              </div>
          </div>

          {/* Carousel */}
          <Slider {...settings}>
            <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
              <div className="item" style={{ margin: "0 15px" }}> {/* Add margin here */}
                <div className="thumb">
                  <Link to="https://lienquan.garena.vn/bung-no-chuoi-su-kien-cong-dong-toan-quoc-sinh-nhat-lien-quan-8-tuoi-gom-qua-gop-sang-ngay-12-10-13-10/">
                    <img
                      src="assets/images/news1.png"
                      style={{ height: "250px", transition: "transform 0.3s ease" }}
                      alt=""
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </Link>
                  <div className="news-title">
                    <div style={{ textTransform: "uppercase" }}>
                      CHUỖI SỰ KIỆN CỘNG ĐỒNG TOÀN QUỐC SINH NHẬT LIÊN QUÂN 8 TUỔI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
              <div className="item" style={{ margin: "0 15px" }}> {/* Add margin here */}
                <div className="thumb">
                  <Link to="/#">
                    <img
                      src="assets/images/news2.jpg"
                      style={{ height: "250px", transition: "transform 0.3s ease" }}
                      alt=""
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </Link>
                  <div className="news-title">
                    <div style={{ textTransform: "uppercase" }}>
                      Tổng hợp chuỗi sự kiện hợp tác thương hiệu: Liên Quân x Demon Slayer: Kimetsu no Yaiba
                    </div>
                  </div>
                </div>
              </div>
            </div>  

            <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
              <div className="item">
                <div className="thumb">
                  <Link to="/#">
                    <img
                      src="assets/images/new3.png"
                      style={{ height: "250px", transition: "transform 0.3s ease" }}
                      alt=""
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </Link>
                  <div className="news-title">
                    <div style={{ textTransform: "uppercase" }}>
                      11:00 NGÀY 01/10 MỞ BÁN VÉ THAM DỰ CHUNG KẾT ĐTDV MÙA ĐÔNG 2024 (27/10) TẠI TICKETBOX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
              <div className="item" style={{ margin: "0 15px" }}> {/* Add margin here */}
                <div className="thumb">
                  <Link to="https://lienquan.garena.vn/bung-no-chuoi-su-kien-cong-dong-toan-quoc-sinh-nhat-lien-quan-8-tuoi-gom-qua-gop-sang-ngay-12-10-13-10/">
                    <img
                      src="assets/images/new4.png"
                      style={{ height: "250px", transition: "transform 0.3s ease" }}
                      alt=""
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </Link>
                  <div className="news-title">
                    <div style={{ textTransform: "uppercase" }}>
                      CTHÔNG BÁO XỬ PHẠT ĐỘI TUYỂN ĐỒNG THÁP TẠI GIẢI ĐẤU TỨ PHƯƠNG ĐẠI CHIẾN MÙA ĐÔNG 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
              <div className="item" style={{ margin: "0 15px" }}> {/* Add margin here */}
                <div className="thumb">
                  <Link to="/#">
                    <img
                      src="assets/images/new5.jpg"
                      style={{ height: "250px", transition: "transform 0.3s ease" }}
                      alt=""
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </Link>
                  <div className="news-title">
                    <div style={{ textTransform: "uppercase" }}>
                    VÒNG CHUNG KẾT TOÀN QUỐC TỨ PHƯƠNG ĐẠI CHIẾN MÙA ĐÔNG 2024 – VƯỢT NGÀN THỬ THÁCH, CHINH PHỤC VINH QUANG
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;