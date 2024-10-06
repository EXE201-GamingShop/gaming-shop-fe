import React from "react";
import { Link } from "react-router-dom";

const trendingItems = [
  {
    img: "assets/images/products/nick1.jpg",
    category: "Hành động",
    title: "Liên quân (nick1)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick2.jpg",
    category: "Hành động",
    title: "Liên quân (nick2)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick3.jpg",
    category: "Hành động",
    title: "Liên quân (nick3)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick4.jpg",
    category: "Hành động",
    title: "Liên quân (nick4)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick5.jpg",
    category: "Hành động",
    title: "Liên quân (nick5)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick6.jpg",
    category: "Hành động",
    title: "Liên quân (nick6)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick7.jpg",
    category: "Hành động",
    title: "Liên quân (nick7)",
    link: "product-details.html",
  },
  {
    img: "assets/images/products/nick8.jpg",
    category: "Hành động",
    title: "Liên quân (nick8)",
    link: "product-details.html",
  },
];

const AllProduct = () => {
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ fontWeight: "bolder" }}>
              <h3>Sản phẩm</h3>
              <span className="breadcrumb"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row trending-box" style={{ marginTop: "30px" }}>
        <h1 className="title text-center">Tất cả các Account</h1>
        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
          <div className="item">
            <div className="thumb">
              <Link to="/product-details">
                <img
                  src="assets/images/product1.jpg"
                  style={{ height: "230px" }}
                  alt=""
                />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Hành động</span>
              <h4>Liên Quân J143</h4>
              <Link to="/product-details">
                <i className="fa fa-shopping-bag"></i>
              </Link>
            </div>
          </div>
        </div>
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 align-self-center mb-30 trending-items"
          >
            <div className="item">
              <div className="thumb">
                <a href={item.link}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ height: "230px" }}
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">{item.category}</span>
                <h4>{item.title}</h4>
                <a href={item.link}>
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </div>
            </div>
            
          </div>

        ))}
        
      </div>

      
    </div>
  );
};

export default AllProduct;
