import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  const addToCart = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Đã thêm vào gian hàng!",
      showConfirmButton: false,
      timer: 1200,
    }).then((result) => {
      navigate("/checkout");
    });
  };

  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Liên Quân J143</h3>
              <span className="breadcrumb">
                <a href="#">Shop</a> Liên Quân J143
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="assets/images/product1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>Liên Quân J143</h4>
              <span className="price">
                <em>532,000đ</em> 320,000đ
              </span>
              <p>
                ✔️Tài khoản đăng nhập Garena, chưa liên kết Facebook
                <br />
                ✔️Email đã khóa/chết (thêm CCCD vào xóa được email)
                <br />
                + Chú ý: Thêm được CCCD để xóa email. Shop hỗ trợ đầy đủ sau khi
                đổi thông tin xong cho người mua.
                <br />
                ✔️Có số điện thoại - Hỗ trợ thay đổi (miễn phí)
                <br />
                ✔️Ngày thay đổi số ĐT cho người mua: 12/10/2024
                <br />
                + Lưu ý: Ngày đổi điện thoại chưa đến thì shop chịu trách nhiệm
                đến khi đổi thông tin xong cho người mua. Ngày đổi qua rồi thì
                hỗ trợ được liền cho người mua.
                <br />+ Quan trọng: Nhắn tin ở Chat Web/Zalo để được hỗ trợ thay
                đổi thông tin và bảo mật tránh mất acc. Để thời gian quá lâu
                không liên hệ, shop không hỗ trợ được ạ. (Xin chú ý).
              </p>
              <form id="qty" Hành động="#">
                <input
                  type="qty"
                  className="form-control"
                  id="1"
                  aria-describedby="quantity"
                  placeholder="1"
                />
                <button type="button" onClick={addToCart}>
                  <i className="fa fa-shopping-bag"></i> MUA NGAY
                </button>
              </form>
            </div>
            <div className="col-lg-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          Mô tả
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="reviews-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#reviews"
                          type="button"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                        >
                          Đánh giá (3)
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <p>
                        You can search for more templates on Google Search using
                        keywords such as "templatemo digital marketing",
                        "templatemo one-page", "templatemo gallery", etc. Please
                        tell your friends about our website. If you need a
                        variety of HTML templates, you may visit Tooplate and
                        Too CSS websites.
                      </p>
                      <br />
                      <p>
                        Coloring book air plant shabby chic, crucifix normcore
                        raclette cred swag artisan activated charcoal. PBR&B
                        fanny pack pok pok gentrify truffaut kitsch helvetica
                        jean shorts edison bulb poutine next level humblebrag la
                        croix adaptogen. Hashtag poke literally locavore, beard
                        marfa kogi bruh artisan succulents seitan tonx waistcoat
                        chambray taxidermy. Same cred meggings 3 wolf moon lomo
                        irony cray hell of bitters asymmetrical gluten-free art
                        party raw denim chillwave tousled try-hard succulents
                        street art.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <p>
                        Coloring book air plant shabby chic, crucifix normcore
                        raclette cred swag artisan activated charcoal. PBR&B
                        fanny pack pok pok gentrify truffaut kitsch helvetica
                        jean shorts edison bulb poutine next level humblebrag la
                        croix adaptogen. <br />
                        <br />
                        Hashtag poke literally locavore, beard marfa kogi bruh
                        artisan succulents seitan tonx waistcoat chambray
                        taxidermy. Same cred meggings 3 wolf moon lomo irony
                        cray hell of bitters asymmetrical gluten-free art party
                        raw denim chillwave tousled try-hard succulents street
                        art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section categories related-games">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>Hành động</h6>
                <h2>Game liên quan</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <a href="shop.html">Xem tất cả</a>
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

export default ProductDetails;
