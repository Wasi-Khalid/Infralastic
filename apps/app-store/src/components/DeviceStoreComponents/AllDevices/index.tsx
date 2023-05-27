import './all-devices.scss';
import { Card, Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard";
import bogus from '../../../assets/products/fwebp.png';
import { useNavigate } from 'react-router-dom'
import {useAppDispatch} from "../../../services/store/hooks";
import {useEffect} from "react";
import {fetchAllCategoryList, fetchAllProductList} from "../../../services/store/actions/DeviceStore";

const AllDevices = () => {
  const router = useNavigate();
  const dispatch = useAppDispatch();

  function getCategory() {
    const config: any =  {}
    dispatch(fetchAllCategoryList(config)).then((res: any) => {
      console.log(res)
    })
  }
  function getProduct() {
    const config: any =  {}
    dispatch(fetchAllProductList(config)).then((res: any) => {
      console.log(res)
    })
  }

  useEffect(() => {
   getCategory();
   getProduct();
  }, [])
  return(
    <div className='mb-3'>
      <Card className='p-2 rounded-4'>
        <Card.Body>
          <div className='d-flex mt-3 align-items-center'>
            <div className='w-50'>
              <h5 className='theme-font mb-1'>All Devices</h5>
              <p className='fs-7 theme-font text-muted'>1087 Devices Listed</p>
            </div>
            <div className='w-50 d-flex justify-content-end'>
              <input
                type="text"
                className='border-0 bg-gray input-bg px-3 py-2 text-muted theme-font fs-7'
                placeholder='Sort by : Most Popular'
              />
            </div>
          </div>
          <Row>
            <Col md={4}>
              <ProductCard
                click={() => router('/device-detail')}
                image={bogus}
                description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)'
                cost='$1,499.99'
                inch='16"'
              />
            </Col>
            {/*<Col md={4}><ProductCard image={bogus} description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)' cost='$1,499.99' inch='16"' /></Col>*/}
            {/*<Col md={4}><ProductCard image={bogus} description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)' cost='$1,499.99' inch='16"' /></Col>*/}
            {/*<Col md={4}><ProductCard image={bogus} description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)' cost='$1,499.99' inch='16"' /></Col>*/}
            {/*<Col md={4}><ProductCard image={bogus} description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)' cost='$1,499.99' inch='16"' /></Col>*/}
            {/*<Col md={4}><ProductCard image={bogus} description='ASUS Vivobook Pro 16X (N7601, 12th Gen Intel)' cost='$1,499.99' inch='16"' /></Col>*/}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default AllDevices;
