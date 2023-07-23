import {Breadcrumb, Button, Card, Col, Row} from "react-bootstrap";
import ProductCard from "../../../components/DeviceStoreComponents/ProductCard";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {fetchAllProductList, fetchProductById, useGlobalDispatch} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {BiArrowBack} from "react-icons/bi";
const DeviceDetail  = () => {
  const router = useNavigate();
  const dispatch = useGlobalDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [productData, setProductData] = useState<any>(null);
  const [allProductData, setAllProductData] = useState<any>(null);

  const id: any = searchParams.get('productId')

  const fetchProduct = () => {
    const fromData = {
      product_id: id
    }
    dispatch(fetchProductById(fromData)).then((res: any) => {
      setProductData(res.payload.result);
    })
  }

  function getProduct() {
    const config: any =  {}
    dispatch(fetchAllProductList(config)).then((res: any) => {
      setAllProductData(res?.payload?.result?.product_details);
    })
  }

  useEffect(() => {
    fetchProduct();
    getProduct();
  }, [])

  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">Device Store</Breadcrumb.Item>
          <Breadcrumb.Item active>{productData?.product_name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <div className='position-absolute back-btn'>
          <button
            className='bg-theme-danger border-0 text-white d-flex align-items-center p-2 rounded-circle'
            onClick={() => router(-1)}
          >
            <BiArrowBack />
          </button>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                <div className='mb-5'>
                  <img src={productData?.image} width='440' height='250' alt=""/>
                </div>
                {/*<Row>*/}
                {/*  <Col md={3}>*/}
                {/*    <img className='mx-3' src={bogus2} width='120' height='120'  alt=""/>*/}
                {/*  </Col>*/}
                {/*  <Col md={3}>*/}
                {/*    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>*/}
                {/*  </Col>*/}
                {/*  <Col md={3}>*/}
                {/*    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>*/}
                {/*  </Col>*/}
                {/*  <Col md={3}>*/}
                {/*    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>*/}
                {/*  </Col>*/}
                {/*</Row>*/}
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-center h-100 px-3">
                <p className='theme-font fs-7 text-muted'>{productData?.brand}</p>
                <h4 className='theme-font'>{productData?.product_name}</h4>
                <p className='theme-font m-0'>Availability: <span className='theme-danger'>Available</span></p>
                <hr/>
                <p className='theme-font text-muted fs-7'>Lorem ipsum dolor sit amet consectetur. Tincidunt lacus id ornare elementum. Fames integer lectus nisi senectus vitae ipsum libero. In aliquet dolor nibh ullamcorper porta pellentesque. Imperdiet lacus penatibus enim tristique massa tellus. Facilisis nunc faucibus metus volutpat rhoncus est blandit. Magna sem congue et ac in. Ipsum enim in elit suscipit libero tempor et. Morbi posuere posuere molestie vel.</p>
                <h2 className='theme-danger fw-semibold'>${productData?.price}</h2>
                <div className='my-2 d-flex'>
                  <Button
                    className='bg-theme-danger text-white border-0 theme-font me-3'
                  >Add To Cart</Button>
                  <Button variant='outline-danger'>Add To Wishlist</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Body>
          <h5 className='text-center theme-font py-3'>Description</h5>
          <div className='border-1 py-4 w-100'>
            <table className="table-bordered rounded w-100">
              <tbody>
              <tr>
                <th className='theme-font'>Product number</th>
                <td>{productData?.product_id}</td>
              </tr>
              <tr>
                <th className='theme-font'>Product name</th>
                <td>{productData?.product_name}</td>
              </tr>
              <tr>
                <th className='theme-font'>Microprocessor</th>
                <td>{productData?.microprocessor}</td>
              </tr>
              <tr>
                <th className='theme-font'>Chipset</th>
                <td>{productData?.chipset}</td>
              </tr>
              <tr>
                <th className='theme-font'>Memory, standard</th>
                <td>{productData?.memory}</td>
              </tr>
              <tr>
                <th className='theme-font'>Video graphics</th>
                <td>{productData?.video_graphics}</td>
              </tr>
              <tr>
                <th className='theme-font'>Hard drive</th>
                <td>{productData?.hard_drive}</td>
              </tr>
              <tr>
                <th className='theme-font'>Display</th>
                <td>{productData?.display}</td>
              </tr>
              <tr>
                <th className='theme-font'>Wireless connectivity</th>
                <td>{productData?.wireless_connectivity}</td>
              </tr>
              <tr>
                <th className='theme-font'>Network interface</th>
                <td>{productData?.network_interface}</td>
              </tr>
              <tr>
                <th className='theme-font'>Expansion slots</th>
                <td>{productData?.expansion_slots}</td>
              </tr>
              <tr>
                <th className='theme-font'>External ports</th>
                <td>{productData?.external_ports}</td>
              </tr>
              <tr>
                <th className='theme-font'>Minimum dimensions (W x D x H)</th>
                <td>{productData?.minimum_dimension}</td>
              </tr>
              <tr>
                <th className='theme-font'>Weight</th>
                <td>{productData?.device_weight}</td>
              </tr>
              <tr>
                <th className='theme-font'>Power supply type</th>
                <td>{productData?.power_supply_type}</td>
              </tr>
              <tr>
                <th className='theme-font'>Battery type</th>
                <td>{productData?.battery_type}</td>
              </tr>
              <tr>
                <th className='theme-font'>Webcam</th>
                <td>{productData?.web_cam}</td>
              </tr>
              <tr>
                <th className='theme-font'>Audio features</th>
                <td>{productData?.audio_features}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Body>
          <div className="p-3">
            <h5 className='theme-font'>Related Devices</h5>
            <Row>
              {allProductData?.filter((item: any) => item?.brand === productData?.brand).map((item: any) => (
                <Col md={3}>
                  <ProductCard
                    click={() => router({
                      pathname: '/device-detail',
                      search: `?${createSearchParams({
                        productId: item?.product_id
                      })}`
                    })}
                    image={item?.image}
                    productId={item?.product_id}
                    description={item?.product_name}
                    cost={item?.price}
                    inch='16"'
                    purchase={() => router({
                      pathname: '/device-checkout',
                      search: `?${createSearchParams({
                        productId: item?.product_id
                      })}`
                    })}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default DeviceDetail;
