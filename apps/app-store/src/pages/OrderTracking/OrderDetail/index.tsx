import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import {Card, Col, Row} from "react-bootstrap";
import bogus from '../../../assets/products/product_6.png';
import bogus1 from '../../../assets/products/product_1.png';
import fake from '../../../assets/fake.png';

const OrderDetail = () => {
  const steps = ['Ordered', 'Order Process', 'Packed', "Shipped", "Delivered"];
  const [activeStep, setActiveStep] = useState(0);


  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className='d-flex w-100 flex-column justify-content-center'>
                <div className='d-flex w-100'>
                  <div className='d-flex w-75'>
                    <img src={bogus} alt=""/>
                    <div>
                      <p className='theme-font mb-2'>ASUS Vivobook Pro 16X  ( N7601,
                        12th Gen Intel )</p>
                      <p className='text-muted fs-7'>Sold & Shipped by : Earth's Best <span className='theme-danger theme-font'>Order ID: 0005411844210</span></p>
                      <p className='fs-4 theme-font'>$8.28  <span className='fs-7 theme-danger'>($2.9 USD)</span></p>
                    </div>
                  </div>
                  <div className='d-flex flex-column w-25 align-items-end'>
                    <p className='text-end'>Delivery expected by Jun 27</p>
                    <button className='bg-theme-danger border-0 text-white theme-font px-3 py-2 rounded mb-2 w-75'>Cancel Order</button>
                    <button className='theme-border-danger theme-danger theme-font px-3 py-2 rounded w-75'>Need Help</button>
                  </div>
                </div>
                <hr/>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={index} onClick={() => handleStepChange(index)}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='mb-3'>
            <Card.Body>
              <div>
                <p className='theme-font py-2'>Delivery Address</p>
                <hr/>
                <div className='d-flex'>
                  <img src={fake} width='71' height='65' alt=""/>
                  <div className='d-flex flex-column px-3'>
                    <p className='mb-2 theme-font'>Brandon Carl</p>
                    <p className='mb-1 fs-7 theme-font text-muted'>326, Hoffman Avenue, New york</p>
                    <p className='mb-1 fs-7 theme-font text-muted'>United States - 10016</p>
                    <p className='theme-font'>Phone Number  - +1 XXXXX YYYYY</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className='my-2'>
            <Card.Body>
              <div>
                <p className='theme-font py-2'>Other items in this order</p>
                <hr/>
                <div className='d-flex w-100'>
                  <img src={bogus1} width='110' height='74' alt=""/>
                  <div className='d-flex w-100 flex-column px-2'>
                    <p className='mb-1 theme-font'>ASUS Vivobook Pro 16X </p>
                    <p className='mb-2 fs-7 theme-font text-muted'>Sold by : Infralastic</p>
                    <p className='theme-font fs-8 mb-0'>Color: Black  Size: Medium </p>
                    <p className='theme-font theme-danger text-end mb-0'><del>$162</del>&nbsp;&nbsp;$180</p>
                    <p className='theme-font text-success text-end'>10% OFF</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default OrderDetail;
