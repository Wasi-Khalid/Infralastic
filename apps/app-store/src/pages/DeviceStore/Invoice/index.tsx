import { getOrderById, useGlobalDispatch } from "@infralastic/global-state";
import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const Invoice = () => {
  const dispatch = useGlobalDispatch()
  const router = useNavigate();
  const [productData, setProductData] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const id: any = searchParams.get('orderId');
  const [InvoiceDate, setInvoiceDate] = useState("");
  const fetchOrderDetails = () => {
    const formData: any = {
      order_no: id
    }
    dispatch(getOrderById(formData)).then((res: any) => {
      setProductData(res?.payload?.result?.product_details)
    })
  }
  useEffect(() => {
    fetchOrderDetails()
  },[])
  useEffect(() => {
    const fetchCurrentDate = () => {
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0]; // Format date as "YYYY-MM-DD"
      setInvoiceDate(formattedDate);
    };
   fetchCurrentDate();
  }, []);
  const calculateTotalCost = (data: any) => {
    let totalCost = 0;
    data?.forEach((item: any) => {
      totalCost += parseFloat(item?.price);
    });
    return totalCost?.toFixed(2);
  };
  function handleSubmit(): void {
    router({
      pathname: '/checkout-complete',
      search: `?${createSearchParams({
        orderId: id
      })}`
    });
  }
  return (
    <Container>
      <Row>
        <Col>
        <h5 className="fw-light"><b>Name:</b> <span>{productData?.[0]?.first_name + productData?.[0]?.last_name}</span></h5>
          <h5 className="fw-light"><b>E-mail:</b> <span>{productData?.[0]?.email}</span></h5>
          <h5 className="fw-light"><b>Address:</b> <span>{productData?.[0]?.address}</span></h5>
          {/* <h5 className="fw-light"><b>Phone No:</b> <span>{productData?.[0]?.phone}</span></h5> */}
          <h5 className="fw-light"><b>InvoiceDate:</b> <span>{InvoiceDate}</span></h5>
          <h5 className="fw-light"><b>Ship to:</b> <span>{productData?.[0]?.state_name + "," + productData?.[0]?.zip_code}</span></h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Product Id</th>
              <th>Item</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            </thead>
            {productData?.map((item:any)=> (
              <tbody>
              <tr>
                <td>{item.product_id}</td>
                <td>{item.product_name}</td>
                <td>{item.brand}</td>
                <td>{item.product_qty}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
            ))}

          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Total: ${calculateTotalCost(productData)}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Download Invoice</Button>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
      <button
                  className='bg-theme-danger border-0 w-50 py-2 theme-font my-4 text-white rounded'
                  type='button'
                  onClick={() => handleSubmit()}
                >
                  proceed to checkout
        </button>
      </div>
    </Container>
  );
};

export default Invoice;
