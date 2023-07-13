import { Stepper, Step, StepLabel } from '@mui/material';
import {useEffect, useState} from 'react';
import {Card, Carousel, Col, Row} from "react-bootstrap";
import fake from '../../../assets/fake.png';
import {useSearchParams} from "react-router-dom";
import {fetchProductById, getOrderById, getTrackingByOrder, useGlobalDispatch} from "@infralastic/global-state";
import {CiHardDrive} from "react-icons/ci";

const OrderDetail = () => {
  const dispatch = useGlobalDispatch();
  const steps = ['Ordered', 'Order Process', 'Packed', "Shipped", "Delivered"];
  const [productData, setProductData] = useState<any>([]);
  const [productItemData, setProductItemData] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const id: any = searchParams.get('orderId');

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const fetchOrderDetails = () => {
    const formData: any = {
      order_no: id
    }
    dispatch(getOrderById(formData)).then((res: any) => {
      setProductData(res.payload.result.product_details)
    })
  }
  const getProductInfo = (id: any) => {
    const formData: any = {
      product_id: id
    }
    dispatch(fetchProductById(formData)).then((res: any) => {
      console.log(res.payload.result)
      setProductItemData(res.payload.result)
    })
  }

  const getOrderTracking = () => {
    const formData: any = {
      order_no: id
    }
    getTrackingByOrder(formData).then((res: any) => {
      const status = res.data.result.order_status
      if(status === steps[0]) {
        setActiveStep(0)
      } else if (status === steps[1]){
        setActiveStep(1)
      } else if (status === steps[2]){
        setActiveStep(2)
      } else if (status === steps[3]){
        setActiveStep(3)
      } else if (status === steps[4]){
        setActiveStep(4)
      }
    })
  }

  useEffect(() => {
    fetchOrderDetails();
    getOrderTracking();
  }, [])
  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <Row>
        <Col md={8}>
          {productItemData === null ?
            <div className='d-flex align-items-center flex-column'>
              <div>
                <i><CiHardDrive size={300} /></i>
              </div>
              <h1 className='theme-font'>No Product Selected</h1>
            </div>
            : <Card>
              <Card.Body>
                <div className='d-flex w-100 flex-column justify-content-center'>
                  <div className='d-flex w-100'>
                    <div className='d-flex w-75'>
                      <img src={productItemData?.image} width='160' height='160' alt="No Product Selected"/>
                      <div className='ms-3'>
                        <p className='theme-font mb-2'>{productItemData?.product_name}</p>
                        <p className='text-muted fs-7'>Sold & Shipped by : {productItemData?.brand}</p>
                        <p className='fs-4 theme-font'>${productItemData?.price} <span className='fs-7 theme-danger'>($2.9 USD)</span></p>
                      </div>
                    </div>
                    <div className='d-flex flex-column w-25 align-items-end'>
                      <p className='text-end'>Delivery expected by Jun 27</p>
                      <button className='bg-theme-danger border-0 text-white theme-font px-3 py-2 rounded mb-2 w-75'>Cancel Order</button>
                      <button className='theme-border-danger theme-danger theme-font px-3 py-2 rounded w-75'>Need Help</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          }
          <hr/>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index} onClick={() => handleStepChange(index)}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
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
          <Carousel>
            {productData?.map((item: any, index: any) => (
              <Carousel.Item onClick={() => getProductInfo(item.product_id)}>
                <Card className='my-2 mb-3'>
                  <Card.Body>
                    <div>
                      <p className='theme-font py-2'>Order Items</p>
                      <hr/>
                        <div className='d-flex w-100'>
                        <img src={item?.image} width='110' height='74' alt=""/>
                        <div className='d-flex w-100 flex-column px-2'>
                          <p className='mb-1 theme-font'>{item?.product_name}</p>
                          <p className='mb-2 fs-7 theme-font text-muted'>Sold by : Infralastic</p>
                          <p className='theme-font fs-8 mb-0'>Color: Black  Size: Medium </p>
                          <p className='theme-font theme-danger text-end mb-0'><del>$162</del>&nbsp;&nbsp;${item?.price}</p>
                          <p className='theme-font text-success text-end'>10% OFF</p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}
export default OrderDetail;
