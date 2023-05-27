import './all-devices.scss';
import { Card, Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard";
import bogus from '../../../assets/products/fwebp.png';
import {createSearchParams, useNavigate} from 'react-router-dom'
import {useAppDispatch} from "../../../services/store/hooks";
import {useEffect, useState} from "react";
import {fetchAllCategoryList, fetchAllProductList} from "../../../services/store/actions/DeviceStore";

interface filterInterface {
  hardwareCategory: any;
  brandData: any;
}

const AllDevices = (props: filterInterface) => {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const [originalData, setOriginalData] = useState<any>([])
  const [productData, setProductData] = useState<any>([])
  function getProduct() {
    const config: any =  {}
    dispatch(fetchAllProductList(config)).then((res: any) => {
      setProductData(res?.payload?.result?.product_details);
      setOriginalData(res?.payload?.result?.product_details);
    })
  }

  const applyFilters = () => {
    setProductData((prevAssets: any) => {
      let filteredData = [...originalData];

      if (props.hardwareCategory !== '') {
        filteredData = filteredData.filter((res) => res.category_name === props.hardwareCategory);
      }
      if (props.brandData !== '') {
        filteredData = filteredData.filter((res) => res.brand === props.brandData);
      }

      return filteredData;
    });
  };
  useEffect(() => {
    applyFilters();
  }, [props.hardwareCategory, props.brandData]);

  useEffect(() => {
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
            {productData?.map((item: any) => (
              <Col md={4}>
                <ProductCard
                  click={() => router({
                    pathname: '/device-detail',
                    search: `?${createSearchParams({
                      productId: item?.product_id
                    })}`
                  })}
                  image={item?.image}
                  description={item?.product_name}
                  cost={`$${item?.price}`}
                  inch='16"'
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default AllDevices;
