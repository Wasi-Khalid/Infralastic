import './all-devices.scss';
import { Card, Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard";
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { fetchAllProductList, useGlobalDispatch } from "@infralastic/global-state";

interface filterInterface {
  hardwareCategory: any;
  brandData: any;
  priceData: any;
  categoryData: any;
  operatingData: any;
  memoryData: any;
  ramData: any;
  screenData: any;
  generationData: any;
  warrantyData: any;
}

const AllDevices = (props: filterInterface) => {
  const router = useNavigate();
  const dispatch = useGlobalDispatch();
  const [originalData, setOriginalData] = useState<any>([]);
  const [productData, setProductData] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  function getProduct() {
    const config: any = {}
    dispatch(fetchAllProductList(config)).then((res: any) => {
      setProductData(res?.payload?.result?.product_details);
      setOriginalData(res?.payload?.result?.product_details);
    })
  }

  const applyFilters = () => {
    let filteredData = [...originalData];

    if (props.hardwareCategory !== '') {
      filteredData = filteredData.filter((res) => res.category_name === props.hardwareCategory);
    }
    if (props.brandData !== '') {
      filteredData = filteredData.filter((res) => res.brand === props.brandData);
    }
    if (props.priceData && props.priceData.minPrice !== '' && props.priceData.maxPrice !== '') {
      filteredData = filteredData.filter((res: any) => res.price >= parseInt(props.priceData.minPrice) && res.price <= parseInt(props.priceData.maxPrice));
    }
    if (props.categoryData !== '') {
      if (props.categoryData === 1) {
        filteredData = [...originalData]
      } else {
        filteredData = filteredData.filter((res) => res.category_id === JSON.parse(props.categoryData));
      }
    }
    if (searchQuery.trim() !== '') {
      filteredData = filteredData.filter((res: any) =>
        res.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Apply additional filters
    if (props.operatingData !== '') {
      filteredData = filteredData.filter((res) => res.operating_system === props.operatingData);
    }
    if (props.memoryData !== '') {
      filteredData = filteredData.filter((res) => res.memory === props.memoryData);
    }
    if (props.ramData !== '') {
      filteredData = filteredData.filter((res) => res.ram === props.ramData);
    }
    if (props.screenData !== '') {
      filteredData = filteredData.filter((res) => res.screen_size === props.screenData);
    }
    if (props.generationData !== '') {
      filteredData = filteredData.filter((res) => res.generation === props.generationData);
    }
    if (props.warrantyData !== '') {
      filteredData = filteredData.filter((res) => res.warranty === props.warrantyData);
    }

    setProductData(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [props.hardwareCategory, props.brandData, props.priceData, props.categoryData, searchQuery, props.operatingData, props.memoryData, props.ramData, props.screenData, props.generationData, props.warrantyData]);

  useEffect(() => {
    getProduct();
  }, [])

  return (
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
                placeholder='Sort by : Name'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Row>
            {productData?.map((item: any) => (
              <Col md={4} key={item.product_id}>
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
                  cost={`$${item?.price}`}
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
        </Card.Body>
      </Card>
    </div>
  )
}

export default AllDevices;
