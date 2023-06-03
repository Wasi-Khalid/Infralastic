import {Card, Col, Row} from "react-bootstrap";
import bogus from '../../../assets/products/product_6.png'

const OrderDetail = () => {
  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className='d-flex w-100 flex-column justify-content-center'>
                <div className='d-flex'>
                  <img src={bogus} alt=""/>
                  <div>
                    <p className='theme-font mb-2'>ASUS Vivobook Pro 16X  ( N7601,
                      12th Gen Intel )</p>
                    <p className='text-muted fs-7'>Sold & Shipped by : Earth's Best <span className='theme-danger theme-font'>Order ID: 0005411844210</span></p>
                    <p className='fs-4 theme-font'>$8.28  <span className='fs-7 theme-danger'>($2.9 USD)</span></p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <div>

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default OrderDetail;
