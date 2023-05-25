import {Breadcrumb, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

const DeviceCheckout = () => {
  const [firstName, setFirstName] = useState('')
  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">Device Store</Breadcrumb.Item>
          <Breadcrumb.Item >Ausu Vivobook pro 16x  (N7601,12th Gen Intel)</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <br/>
      <Card className='p-3'>
        <Card.Body>
          <Row>
            <Col md={8}>
              <div>
                <h6 className='theme-font mb-4'>Billing address</h6>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-2" controlId="formBasicFirstName">
                        <Form.Label className='fs-7 mb-1 theme-font'>First Name *</Form.Label>
                        <Form.Control
                          type="name"
                          value={firstName}
                          className='bg-white shadow'
                          onChange={(e) => setFirstName(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default DeviceCheckout;
