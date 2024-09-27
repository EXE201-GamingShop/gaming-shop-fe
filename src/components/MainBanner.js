import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const BannerComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `(Dựa trên một câu truyện có thật) “Câu chuyện của tớ bắt đầu từ một quá khứ đầy hiểu nhầm, khi tớ bị cả xóm tẩy chay do một sai lầm mà không phải do tớ gây ra. Từ đó, không một ai chơi với tớ nữa. Tớ rất khó chịu khi đột nhiên các vị phụ huynh cấm con em họ tiếp xúc với tớ. Thời gian đó thực sự đáng sợ khi tớ phải chịu đựng ánh mắt dè bỉu và những lời xúc phạm. Tớ không biết mình sẽ vượt qua thế nào cho đến năm 2016, khi một tựa game mà tớ vẫn chơi đến bây giờ ra mắt. Nhờ tựa game này, tớ đã gặp được những người bạn online rất hiểu ý nhau. Những lời khuyên và động viên của họ đã giúp tớ tự tin hơn trong cuộc sống. Mọi chuyện vẫn diễn ra tốt đẹp cho đến một ngày tớ mất liên lạc với một số người bạn trong game. Mãi sau này, khi họ tìm lại được tớ, tớ mới biết họ bị hack tài khoản do nhấn vào link lừa đảo. Bản thân tớ cũng đã từng bị lừa trong các group mua bán game. Đến năm 2022, khi tớ chỉ biết chơi game và giao lưu với bạn bè online, chính em trai tớ đã "khai sáng" cho tớ một điều. Tớ tự hỏi: Nếu bạn bè trong game luôn lo lắng về việc bị lừa đảo, và tớ cũng từng bị lừa mua tài khoản không đúng giá trị, thì tại sao tớ không tham gia vào quá trình này? Vừa có thể kiếm thêm thu nhập, lại vừa giúp đỡ các bạn trong cộng đồng game không rơi vào tình cảnh như tớ trước đây. Khi tớ đã tham gia vào thị trường này, vừa có dòng tiền ổn định và những con cái của những vị phụ huynh từng dè bỉu giờ đây lại là một khách hàng trung thành của tớ. Và đến bây giờ tớ vẫn luôn thực hiện được điều mà tớ mong muốn đó là giúp cho cộng đồng sạch sẽ, ít bị lừa đảo hơn.`;

  const truncatedText = fullText.slice(0, 300); // Cắt ngắn văn bản
  const displayText = isExpanded ? fullText : `${truncatedText}...`;

  return (
    <div className="main-banner">
      <Container>
        <Row>
          <Col lg={6} className="align-self-center">
            <div className="caption header-text">
              <h6>Chào mừng đến với Shop Dịch Vụ Game</h6>
              <h2>Thế giới acc ngon - giá ngọt</h2>
              <p>{displayText}<p style={{cursor: 'pointer', color: 'black'}} onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Xem ít hơn' : 'Xem thêm'}
              </p></p>

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
          <Col lg={{span: 4, offset: 2}}>
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
