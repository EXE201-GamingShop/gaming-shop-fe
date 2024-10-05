import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>404 - Không Tìm Thấy Trang</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="not-found-page" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <i className="fas fa-exclamation-triangle" style={{ fontSize: "72px", color: "#ffc107", marginBottom: "30px" }}></i>
              <h1 style={{ fontSize: "72px", marginBottom: "30px" }}>404</h1>
              <h2><i className="fas fa-search mr-2"></i>Rất tiếc! Không tìm thấy trang</h2>
              <p>Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên, hoặc tạm thời không khả dụng.</p>
              <a href="/" className="btn btn-primary mt-4">
                <i className="fas fa-home mr-2"></i> Về Trang Chủ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;