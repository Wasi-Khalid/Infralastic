import {Breadcrumb, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import creditCard from '../../../assets/payment/credit-card.png';
import debitCard from '../../../assets/payment/debit-card.png';
import paypalCard from '../../../assets/payment/paypal.png';
import {CiShoppingCart} from "react-icons/ci";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {
  addToCartList,
  cartDelete, cartRemove,
  checkoutOrder,
  deleteCartList, getLocation,
  useGlobalDispatch,
  useGlobalSelector, wishRemove
} from "@infralastic/global-state";
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
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const cartInfo = useGlobalSelector((state) => state.cart.cartInfo);
  const wishInfo = useGlobalSelector((state) => state.cart.wishInfo);
  const totalCost = cartInfo?.cart_details?.reduce((total: number, item: any) => total + item?.price, 0) || 0;

  const id: any = searchParams.get('productId');

  const product = cartInfo?.cart_details?.map((item: any) => ({
    product_id: item.product_id
  }));

  useEffect(() => {
    if (cartInfo && cartInfo?.cart_details) {
      setCartItems(cartInfo?.cart_details);
    }
    if (wishInfo && wishInfo?.wishlist_details) {
      setWishItems(wishInfo?.wishlist_details);
    }
  }, [cartInfo, wishInfo]);

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
      zip_code: zip,
      country_id: JSON.parse(country),
      state_id: state,
      user: 1,
      product_ids: product,
      company_id: 1,
      company_name:"My Company",
      cartlist_no: 1
    }
    checkoutOrder(formData).then((res: any) => {
      if (res.data?.result?.success === true) {
        toast.success(res.data.result.msg)
        const orderNo = res.data.result.order_no;
        createDownloadableTxtFile(orderNo);
        setTimeout(() => {
          router({
            pathname: '/invoice',
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

  const handleDelete = async (id: any) => {
    const formData: any = {
      cartlist_no: 1,
      product_id: id,
    };
    try {
      dispatch(cartDelete(formData)).then(() => {
        toast.success("Item Removed Successfully");
        setCartItems((prevCartItems: any) =>
          prevCartItems.map((item: any) =>
            item.product_id === id
              ? { ...item, product_qty: item.product_qty - 1 }
              : item
          )
        );
        dispatch((state: any) => ({
          ...state,
          cart: {
            ...state?.cart,
            cartInfo: {
              ...state?.cart?.cartInfo,
              cart_details: state?.cart?.cartInfo?.cart_details.map((item: any) =>
                item?.product_id === id
                  ? { ...item, product_qty: item?.product_qty - 1 }
                  : item
              ).filter((item: any) => item?.product_qty > 0), // Filter out items with quantity 0
            },
          },
        }));
      });
    } catch (error) {
      console.log(error);
    }
  };


  const handleRemove = async (id: any) => {
    const formData: any = {
      cartlist_no: 1,
      product_id: id,
    };
    try {
      dispatch(cartRemove(formData)).then(() => {
        toast.success("Item Deleted Successfully");
        dispatch((state: any) => ({
          ...state,
          cart: {
            ...state?.cart,
            cartInfo: {
              ...state?.cart?.cartInfo,
              cart_details: state?.cart?.cartInfo?.cart_details.filter(
                (item: any) => item?.product_id !== id
              ),
            },
          },
        }));
        setCartItems((prevCartItems: any) =>
          prevCartItems.filter((item: any) => item.product_id !== id)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishRemove = async (id: any) => {
    const formData: any = {
      wishlist_no: 1,
      product_id: id
    }
    try {
      dispatch(wishRemove(formData)).then(() => {
        toast.success('Item Deleted Successfully')
        dispatch((state: any) => ({
          ...state,
          cart: {
            ...state?.cart,
            wishInfo: {
              ...state?.cart?.wishInfo,
              wishlist_details: state?.cart?.wishInfo?.wishlist_details.filter(
                (item: any) => item?.product_id !== id
              )
            }
          }
        }));
        setWishItems((prevCartItems: any) =>
          prevCartItems.filter((item: any) => item?.product_id !== id)
        );
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddCart = async (id: any, wish: boolean) => {
    const formData = {
      cartlist_no: 1,
      product_id: id
    }
    try {
      await dispatch(addToCartList(formData)).then((res: any) => {
        toast.success('Item Added Successfully')
        console.log(res)
        if (wish) {
          handleWishRemove(id);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const fetchLocation = () => {
    const config = {}
    getLocation(config).then((res: any) => {
      setLocationData(res.data.result.location_details)
    })
  }
  useEffect(() => {
    fetchLocation();
  }, []);

  const calculateTotal = (items: any) => {
    let total = 0;
    items.forEach((item: any) => {
      total += item.price * item.product_qty;
    });
    return total;
  };


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
                          <option value=''>Select Country</option>
                          {locationData.map((item: any) => (
                            <option value={item?.location_id}>{item?.location_name}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={4}>

                      <Form.Group className="mb-3" controlId="state">
                        <Form.Label className='fs-7 mb-1 theme-font'>State</Form.Label>
                        <Form.Control
                          type="name"
                          value={state}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setState(e.target.value)}
                          required={true}
                        />
                      </Form.Group>
                      </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="country">
                        <Form.Label className='fs-7 mb-1 theme-font'>Zip</Form.Label>
                        <Form.Control
                          type="name"
                          value={zip}
                          className='bg-white shadow fs-7 theme-font p-2 px-3'
                          onChange={(e) => setZip(e.target.value)}
                          required={true}
                        />
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
                        <span className='theme-font'><CiShoppingCart size={22} /><span className='ms-1 m-0'>{cartItems?.length} item</span></span>
                      </div>
                    </div>
                    <div className="py-3">
                      {cartItems?.map((item: any, index: any) => {
                        if (item.product_qty === 0) {
                          handleRemove(item.product_id);
                          return null;
                        }
                        return (
                        <>
                          <div className="d-flex w-100">
                            <div className="d-flex justify-content-start w-75">
                              <img src={item?.image} width='60' height='60' alt=""/>
                              <div className='position-absolute d-flex justify-content-end'>
                                <button
                                  className='bg-theme-danger border-0 w-auto rounded text-white'
                                  type='button'
                                  onClick={() => handleRemove(item?.product_id)}
                                ><AiOutlineDelete /></button>
                              </div>
                              <div className='d-flex flex-column h-100 ms-2 justify-content-center'>
                                <p className='theme-font mb-1'>{item?.product_name}</p>
                                <p className='theme-font fs-7 text-muted'>Brief description </p>
                              </div>
                            </div>
                            <div className="d-flex flex-column w-25">
                              <div className='d-flex justify-content-end'>
                                <button
                                  className='m-0 border-0 bg-transparent'
                                  onClick={() => handleDelete(item?.product_id)}
                                >-</button>
                                <span>{item?.product_qty}</span>
                                <button
                                  className='m-0 border-0 bg-transparent'
                                  onClick={() => handleAddCart(item?.product_id, false)}
                                >+</button>
                              </div>
                              <div className="d-flex flex-column justify-content-end">
                                <h5 className='m-0 fw-semibold  theme-danger text-end'>{item?.price * item?.product_qty}</h5>
                              </div>
                            </div>
                          </div>
                          <hr/>
                        </>
                        );
                      })}
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
                          <h5 className='theme-font theme-danger m-0'>${calculateTotal(cartItems)}</h5>
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
              <br/>
              {/* <Card className='p-3 shadow'>
                <Card.Body>
                  <div className='d-flex flex-column w-100'>
                    <div className="d-flex w-100">
                      <div className='w-50 d-flex justify-content-start'>
                        <p className='theme-font'>Your Wishlsit</p>
                      </div>
                      <div className='w-50 d-flex justify-content-end'>
                        <span className='theme-font'><CiShoppingCart size={22} /><span className='ms-1 m-0'>{wishItems?.length} item</span></span>
                      </div>
                    </div>
                    <div className="py-3">
                      {wishItems?.map((item: any, index: any) => (
                        <>
                          <div className="d-flex w-100">
                            <div className="d-flex justify-content-start w-75">
                              <img src={item?.image} width='60' height='60' alt=""/>
                              <div className='position-absolute d-flex justify-content-end'>
                                <button
                                  className='bg-theme-danger border-0 w-auto rounded text-white'
                                  type='button'
                                  onClick={() => handleRemove(item?.product_id)}
                                ><AiOutlineDelete /></button>
                              </div>
                              <div className='d-flex flex-column h-100 ms-2 justify-content-center'>
                                <p className='theme-font mb-1'>{item?.product_name}</p>
                                <p className='theme-font fs-7 text-muted'>Brief description </p>
                              </div>
                            </div>
                            <div className="d-flex flex-column w-25">
                              <div className='d-flex justify-content-end'>
                                <button
                                  className='m-0 border-0 bg-theme-danger text-white rounded fs-7 mb-2'
                                  onClick={() => handleAddCart(item?.product_id, true)}
                                >Add To Cart</button>
                              </div>
                              <div className="d-flex flex-column justify-content-end">
                                <h5 className='m-0 fw-semibold  theme-danger text-end'>{item?.price * item?.product_qty}</h5>
                              </div>
                            </div>
                          </div>
                          <hr/>
                        </>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card> */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default DeviceCheckout;
