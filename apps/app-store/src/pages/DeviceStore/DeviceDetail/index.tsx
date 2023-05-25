import {Breadcrumb, Card, Col, Row} from "react-bootstrap";
import bogus from '../../../assets/laptop-image.png'
import bogus2 from '../../../assets/lap2.png'
import bogus3 from '../../../assets/products/fwebp.png';
import ProductCard from "../../../components/DeviceStoreComponents/ProductCard";
import { useNavigate } from "react-router-dom";
const DeviceDetail  = () => {
  const router = useNavigate()
  return(
    <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">Device Store</Breadcrumb.Item>
          <Breadcrumb.Item active>Ausu Vivobook pro 16x  (N7601,12th Gen Intel)</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                <div className='mb-5'>
                  <img src={bogus} width='440' height='250' alt=""/>
                </div>
                <Row>
                  <Col md={3}>
                    <img className='mx-3' src={bogus2} width='120' height='120'  alt=""/>
                  </Col>
                  <Col md={3}>
                    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>
                  </Col>
                  <Col md={3}>
                    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>
                  </Col>
                  <Col md={3}>
                    <img className='mx-3' src={bogus2} width='120' height='120' alt=""/>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-center h-100 px-3">
                <p className='theme-font fs-7 text-muted'>ASUS, Laptops</p>
                <h4 className='theme-font'>ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)</h4>
                <p className='theme-font m-0'>Availability: <span className='theme-danger'>Available</span></p>
                <hr/>
                <p className='theme-font text-muted fs-7'>Lorem ipsum dolor sit amet consectetur. Tincidunt lacus id ornare elementum. Fames integer lectus nisi senectus vitae ipsum libero. In aliquet dolor nibh ullamcorper porta pellentesque. Imperdiet lacus penatibus enim tristique massa tellus. Facilisis nunc faucibus metus volutpat rhoncus est blandit. Magna sem congue et ac in. Ipsum enim in elit suscipit libero tempor et. Morbi posuere posuere molestie vel.</p>
                <h2 className='theme-danger fw-semibold'>$1,499.99</h2>
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
                <td></td>
              </tr>
              <tr>
                <th className='theme-font'>Product name</th>
                <td>Microsoft Surface Laptop Go</td>
              </tr>
              <tr>
                <th className='theme-font'>Microprocessor</th>
                <td>Intel® Core™ i5-1035G1 (1.0 GHz base frequency, up to 3.6 GHz with Intel® Turbo Boost Technology, 6 MB cache, 4 cores)  </td>
              </tr>
              <tr>
                <th className='theme-font'>Chipset</th>
                <td>Intel® Integrated SoC</td>
              </tr>
              <tr>
                <th className='theme-font'>Memory, standard</th>
                <td>8 GB DDR4</td>
              </tr>
              <tr>
                <th className='theme-font'>Video graphics</th>
                <td>Intel® Iris™ Plus Graphics</td>
              </tr>
              <tr>
                <th className='theme-font'>Hard drive</th>
                <td>128 GB PCIe® NVMe™ M.2 SSD</td>
              </tr>
              <tr>
                <th className='theme-font'>Display</th>
                <td>12.4” PixelSense™ Display, Resolution: 2736 x 1824 (267 PPI) 10 point multi-touch</td>
              </tr>
              <tr>
                <th className='theme-font'>Wireless connectivity</th>
                <td>Wi-Fi 6: 802.11ax compatible <br/> Bluetooth Wireless 5.0 technology</td>
              </tr>
              <tr>
                <th className='theme-font'>Network interface</th>
                <td>None</td>
              </tr>
              <tr>
                <th className='theme-font'>Expansion slots</th>
                <td>MicroSDXC card reader</td>
              </tr>
              <tr>
                <th className='theme-font'>External ports</th>
                <td>
                  1 x USB-C® <br/>
                  1 x USB-A <br/>
                  3.5 mm headphone jack <br/>
                  1 x Surface Connect port <br/>
                  Surface Type Cover port⁴ <br/>
                  Compatible with Surface Dial off-screen interaction* <br/>
                </td>
              </tr>
              <tr>
                <th className='theme-font'>Minimum dimensions (W x D x H)</th>
                <td>11.5” x 7.9” x 0.33” (292 mm x 201 mm x 8.5 mm)</td>
              </tr>
              <tr>
                <th className='theme-font'>Weight</th>
                <td>1.70 lb (775 g)</td>
              </tr>
              <tr>
                <th className='theme-font'>Power supply type</th>
                <td>5702mAh</td>
              </tr>
              <tr>
                <th className='theme-font'>Battery type</th>
                <td>Non-removable</td>
              </tr>
              <tr>
                <th className='theme-font'>Webcam</th>
                <td>
                  5.0MP front-facing camera with 1080p full HD video <br/>
                  8.0MP rear-facing autofocus camera with 1080p full HD video
                </td>
              </tr>
              <tr>
                <th className='theme-font'>Audio features</th>
                <td>1.6W stereo speakers with Dolby® Audio™</td>
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
              <Col md={3}>
                <ProductCard
                  click={() => router('/device-detail')}
                  image={bogus3}
                  description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)'
                  cost='$1,499.99'
                  inch='16"'
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  click={() => router('/device-detail')}
                  image={bogus3}
                  description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)'
                  cost='$1,499.99'
                  inch='16"'
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  click={() => router('/device-detail')}
                  image={bogus3}
                  description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)'
                  cost='$1,499.99'
                  inch='16"'
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  click={() => router('/device-detail')}
                  image={bogus3}
                  description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)'
                  cost='$1,499.99'
                  inch='16"'
                />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default DeviceDetail;
