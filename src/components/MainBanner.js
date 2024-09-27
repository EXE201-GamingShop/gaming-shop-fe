import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const BannerComponent = () => {
  return (
    <div className="main-banner">
      <Container>
        <Row>
          <Col lg={6} className="align-self-center">
            <div className="caption header-text">
              <h6>Welcome to lugx</h6>
              <h2>BEST GAMING SITE EVER!</h2>
              <p>
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for
                your gaming websites. You can download and use this layout for
                commercial purposes. Please tell your friends about TemplateMo.
              </p>
              <div className="search-input">
                <Form id="search" action="#">
                  <Form.Group className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onKeyDown={(e) => {
                        console.log('>>> e', e.target.value);
                      }}
                    />
                    <Button type="submit">Search Now</Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 2 }}>
            <div className="right-image">
              <img src="assets/images/banner-image.jpg" alt="" className="img-fluid" />
              <span className="price">$22</span>
              <span className="offer">-40%</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerComponent;
