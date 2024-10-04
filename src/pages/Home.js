import React from "react";
import { MainBanner } from "../components";

const Home = () => {
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
                <h2>Game đang hot</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <a href="shop.html">Xem tất cả</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/trending-01.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Hành động</span>
                  <h4>Assasin Creed</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/trending-02.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Hành động</span>
                  <h4>Assasin Creed</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/trending-03.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Hành động</span>
                  <h4>Assasin Creed</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/trending-04.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Hành động</span>
                  <h4>Assasin Creed</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>TOP GAMES</h6>
                <h2>Được nhiều người chơi</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <a href="shop.html">Xem tất cả</a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-01.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-02.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-03.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-04.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-05.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/top-game-06.jpg" alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">Phiêu lưu</span>
                  <h4>Assasin Creed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Thể loại</h6>
                <h2>Top thể loại game được ưa chuộng</h2>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Hành động</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/categories-01.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Hành động</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/categories-05.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Hành động</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/categories-03.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Hành động</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/categories-04.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Hành động</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/categories-05.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
