import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
      <div>
          <div className="page-heading header-text">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <h3>Sản phẩm</h3>
                          <span className="breadcrumb">
              </span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="section trending">
              <div className="container">
                  {/* categories */}
                  <h1 className="title text-center">Nick liên quân tự chọn</h1>
                  <div className="row trending-box" style={{paddingBottom: "40px"}}>
                  <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                    <div className="item">
                        <div className="thumb" style={{ position: "relative" }}>
                            <Link to="/#">
                                <img
                                    src="assets/images/500k.jpg" 
                                    style={{height: "200px", transition: "transform 0.3s ease"}} 
                                    alt="" 
                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    fluid 
                                />
                            </Link>
                          
                            <div style={{ 
                                position: "absolute", 
                                bottom: "10px", 
                                right: "10px", 
                                backgroundColor: "#008af8", 
                                color: "white", 
                                padding: "5px 5px",  
                                borderRadius: "8px", 
                                display: "flex", 
                                alignItems: "center",
                                justifyContent: "center",
                                width: "120px",  
                                fontSize: "9px"  
                            }}>
                                <span>Đã bán: 4.9K</span>
                                <span style={{ margin: "0 4px" }}>|</span>
                                <span>Xem: 9.9K</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/1m.jpg" 
                                        style={{height: "200px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/1m-hon.jpg" 
                                        style={{height: "200px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/hon3m.jpg" 
                                        style={{height: "200px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                  <h1 className="title text-center">Nick reg liên quân</h1>
                  <div className="row trending-box" style={{paddingBottom: "40px"}}>
                    <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/5.jpg" 
                                        style={{height: "250px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/6.jpg" 
                                        style={{height: "250px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/7.jpg" 
                                        style={{height: "250px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                  <h1 className="title text-center">Acc liên quân Vip</h1>
                  <div className="row trending-box" style={{paddingBottom: "100px"}}>
                    <div className="col-lg-6 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/8.jpg" 
                                        style={{height: "300px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 align-self-center mb-30 trending-items col-md-12 adv">
                        <div className="item">
                            <div className="thumb">
                                <Link to="/#">
                                    <img 
                                        src="assets/images/9.jpg" 
                                        style={{height: "300px", transition: "transform 0.3s ease"}} 
                                        alt="" 
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </Link>
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: "10px", 
                                    right: "10px", 
                                    backgroundColor: "#008af8", 
                                    color: "white", 
                                    padding: "5px 5px",  
                                    borderRadius: "8px", 
                                    display: "flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "120px",  
                                    fontSize: "9px"  
                                }}>
                                    <span>Đã bán: 4.9K</span>
                                    <span style={{ margin: "0 4px" }}>|</span>
                                    <span>Xem: 9.9K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                  <div className="row trending-box">
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                          <div className="item">
                              <div className="thumb">
                                  <Link to="/product-details"><img src="assets/images/product1.jpg"
                                                                   style={{height: "230px"}} alt=""/></Link>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Liên Quân J143</h4>
                                  <Link to="/product-details"><i className="fa fa-shopping-bag"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-02.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-03.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-04.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-03.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-04.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-02.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-03.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-04.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                          <div className="item">
                              <div className="thumb">
                                  <a href="product-details.html"><img src="assets/images/trending-02.jpg" alt=""/></a>
                              </div>
                              <div className="down-content">
                                  <span className="category">Hành động</span>
                                  <h4>Assasin Creed</h4>
                                  <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <ul className="pagination">
                              <li><a href="#"> &lt; </a></li>
                              <li><a href="#">1</a></li>
                              <li><a className="is_active" href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li><a href="#"> &gt; </a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Products;
