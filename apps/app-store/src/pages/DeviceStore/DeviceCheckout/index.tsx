import {Breadcrumb, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import { useState } from "react";
import creditCard from '../../../assets/payment/credit-card.png';
import debitCard from '../../../assets/payment/debit-card.png';
import paypalCard from '../../../assets/payment/paypal.png';
import {CiShoppingCart} from "react-icons/ci";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import { cartDelete, checkoutOrder, useGlobalDispatch, useGlobalSelector } from "@infralastic/global-state";
import {toast} from "react-toastify";
import {AiOutlineDelete} from "react-icons/ai";
import {BiArrowBack} from "react-icons/bi";

const DeviceCheckout = () => {
  const router = useNavigate();
  const dispatch = useGlobalDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState<any>(null);
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState<any>(null);
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const cartData = useGlobalSelector((state) => state.cart);
  const totalCost = cartData?.cartInfo.reduce((total: number, item: any) => total + item?.cost, 0);

  console.log(cartData, 'cart data')

  const id: any = searchParams.get('productId');

  const product = cartData?.cartInfo.map((item: any) => ({
    product_id: item.productId
  }));

  const createDownloadableTxtFile = (orderNo: any) => {
    const content = `Order Number: ${orderNo}`;
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = `order_${orderNo}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };


  const handleSubmit = () => {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      address: address,
      address_2: address2,
      zip_code: JSON.parse(zip),
      country_id: JSON.parse(country),
      state_id: JSON.parse(state),
      user: 1,
      product_ids: product,
      company_id: 1,
      company_name:"My Company"
    }
    checkoutOrder(formData).then((res: any) => {
      if (res.data?.result?.success === true) {
        toast.success(res.data.result.msg)
        const orderNo = res.data.result.order_no;
        createDownloadableTxtFile(orderNo);
        setTimeout(() => {
          router({
            pathname: '/checkout-complete',
            search: `?${createSearchParams({
              orderId: orderNo
            })}`
          })
        }, 3000)
      } else {
        toast.error(res.data.error.message)
      }
    })
  }

  const handleDelete = async (index: any) => {
    const formData: any = {
      cart_data: cartData?.cartInfo,
      index: index
    }
    try {
      await dispatch(cartDelete(formData)).then(() => {
        toast.success('Item Removed Successfully')
      })
    } catch (error) {
      console.log(error)
    }
  }


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
      <Card>
        <div className='position-absolute back-btn'>
          <button
            className='bg-theme-danger border-0 text-white d-flex align-items-center p-2 rounded-circle'
            onClick={() => router(-1)}
          >
            <BiArrowBack />
          </button>
        </div>
        <Card.Body className='p-4'>
          <Row>
            <Col md={8}>
              <div>
                <h6 className='theme-font mb-4'>Billing address</h6>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label className='fs-7 mb-1 theme-font'>First Name *</Form.Label>
                        <Form.Control
                          type="name"
                          value={firstName}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setFirstName(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label className='fs-7 mb-1 theme-font'>Last Name *</Form.Label>
                        <Form.Control
                          type="name"
                          value={lastName}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setLastName(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label className='fs-7 mb-1 theme-font'>User Name*</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder='Username'
                          value={userName}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setUserName(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label className='fs-7 mb-1 theme-font'>Email <span className='text-muted'>(Optional)</span></Form.Label>
                        <Form.Control
                          type="email"
                          placeholder='you@example.com'
                          value={email}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setEmail(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>Address</Form.Label>
                          <Form.Control
                            type="name"
                            placeholder='1234 Main St'
                            value={address}
                            className='bg-white shadow fs-7 theme-font p-2 px-3'
                            onChange={(e) => setAddress(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>Address 2 <span className='text-muted'>(Optional)</span></Form.Label>
                          <Form.Control
                            type="name"
                            placeholder='Apartment or suite'
                            value={address2}
                            className='bg-white shadow fs-7 theme-font p-2 px-3'
                            onChange={(e) => setAddress2(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="country">
                        <Form.Label className='fs-7 mb-1 theme-font'>Country</Form.Label>
                        <Form.Select
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          aria-label="Default select example"
                          required={true}
                          onChange={(e: any) => setCountry(e.target.value)}
                        >
                          <option value='0'>Select Country</option>
                          <option value='1'>London</option>
                          <option value='2'>Barcelona</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="state">
                        <Form.Label className='fs-7 mb-1 theme-font'>State</Form.Label>
                        <Form.Select
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          aria-label="Default select example"
                          required={true}
                          onChange={(e: any) => setState(e.target.value)}
                        >
                          <option value='0'>Select State</option>
                          <option value='1'>Europe</option>
                          <option value='2'>USA</option>
                        </Form.Select>
                      </Form.Group>
                      </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="country">
                        <Form.Label className='fs-7 mb-1 theme-font'>Zip</Form.Label>
                        <Form.Select
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          aria-label="Default select example"
                          required={true}
                          onChange={(e: any) => setZip(e.target.value)}
                        >
                          <option value='0'>Select Zip</option>
                          <option value='39350'>39350</option>
                          <option value='39898'>39898</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br/>
                  <Form.Check
                    type='checkbox'
                    id={`default-checkbox`}
                    className='theme-font mb-3'
                    label='Shipping address is the same as my billing address'
                  />
                  <Form.Check
                    type='checkbox'
                    id={`default-checkbox-2`}
                    className='theme-font mb-3'
                    label='Save this information for next time '
                  />
                </Form>
                <div>
                  <h5 className='theme-font py-3'>Payment</h5>
                  <Row>
                    <Col md={4}>
                      <div className='p-1'>
                        <img src={creditCard} alt="credit Image" className='w-100'/>
                        <p className='mt-2 theme-font px-3'>Credit Card</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='p-1'>
                        <img src={debitCard} alt="debit Image" className='w-100'/>
                        <p className='mt-2 theme-font px-3'>Debit Card</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='p-1'>
                        <img src={paypalCard} alt="paypal Image" className='w-100'/>
                        <p className='mt-2 theme-font px-3'>Paypal Card</p>
                      </div>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>Name on card <span className='theme-font fs-8'>Full name as displayed on card</span></Form.Label>
                          <Form.Control
                            type="name"
                            value={nameOnCard}
                            className='bg-white shadow'
                            onChange={(e) => setNameOnCard(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>Credit card number</Form.Label>
                          <Form.Control
                            type="number"
                            value={creditCardNumber}
                            className='bg-white shadow'
                            onChange={(e) => setCreditCardNumber(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>Expiration</Form.Label>
                          <Form.Control
                            type="number"
                            value={exp}
                            className='bg-white shadow'
                            onChange={(e) => setExp(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label className='fs-7 mb-1 theme-font'>CVV</Form.Label>
                          <Form.Control
                            type="number"
                            value={cvv}
                            className='bg-white shadow'
                            onChange={(e) => setCvv(e.target.value)}
                            required={true}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <br/>
                <button
                  className='bg-theme-danger border-0 w-100 py-2 theme-font my-4 text-white rounded'
                  type='button'
                  onClick={() => handleSubmit()}
                >
                  Continue to checkout
                </button>
              </div>
            </Col>
            <Col md={4}>
              <Card className='p-3 shadow'>
                <Card.Body>
                  <div className='d-flex flex-column w-100'>
                    <div className="d-flex w-100">
                      <div className='w-50 d-flex justify-content-start'>
                        <p className='theme-font'>Your cart</p>
                      </div>
                      <div className='w-50 d-flex justify-content-end'>
                        <span className='theme-font'><CiShoppingCart size={22} /><span className='ms-1 m-0'>{cartData?.cartInfo?.length} item</span></span>
                      </div>
                    </div>
                    <div className="py-3">
                      {cartData?.cartInfo.map((item: any, index: any) => (
                        <>
                          <div className="d-flex w-100">
                            <div className="d-flex justify-content-start w-75">
                              <img src={item?.image} width='60' height='60' alt=""/>
                              <div className='position-absolute d-flex justify-content-end'>
                                <button
                                  className='bg-theme-danger border-0 w-auto rounded text-white'
                                  type='button'
                                  onClick={() => handleDelete(index)}
                                ><AiOutlineDelete /></button>
                              </div>
                              <div className='d-flex flex-column h-100 ms-2 justify-content-center'>
                                <p className='theme-font mb-1'>{item?.description}</p>
                                <p className='theme-font fs-7 text-muted'>Brief description </p>
                              </div>
                            </div>
                            <div className="d-flex flex-column justify-content-end w-25">
                              <h5 className='m-0 fw-semibold  theme-danger text-end'>{item?.cost}</h5>
                            </div>
                          </div>
                          <hr/>
                        </>
                      ))}
                      <div className="d-flex w-100 p-2 redeem theme-danger rounded">
                        <div className="d-flex justify-content-start align-items-center w-75">
                          <div className='d-flex flex-column h-100 ms-2  justify-content-center'>
                            <p className='theme-font mb-1'>Promo code</p>
                            <p className='theme-font fs-7 text-muted'>EXAMPLECODE</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center w-25">
                          <h5 className='m-0 fw-semibold  theme-danger text-end'>$0</h5>
                        </div>
                      </div>
                      <div className='mt-4 d-flex w-100'>
                        <div className="w-50">
                          <h5 className='theme-font'>Total</h5>
                        </div>
                        <div className="w-50 text-end">
                          <h5 className='theme-font theme-danger m-0'>${totalCost}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <br/>
              <Card className='p-2 shadow'>
                <Card.Body>
                  <InputGroup>
                    <Form.Control
                      placeholder="Promo code"
                      className='fs-7 theme-font'
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='bg-theme-danger text-white theme-font border-0' id="basic-addon2">Redeem</InputGroup.Text>
                  </InputGroup>
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
