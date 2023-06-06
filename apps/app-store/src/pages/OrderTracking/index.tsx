import './order-tracking.scss';
import {useEffect, useState} from "react";
import {getOrderById, getOrderByUser, useGlobalDispatch} from "@infralastic/global-state";
import {createSearchParams, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";

const OrderTracking = () => {
  const [value, setValue] = useState<any>(null);
  const [orderData, setOrderData] = useState<any>(null)
  const router = useNavigate()

  const handleSubmit = () => {
    if (value) {
      router({
        pathname: '/order-detail',
        search: `?${createSearchParams({
          orderId: value
        })}`
      })
    }
  }

  const fetchOrders = () => {
    const formData: any = {
      'user': 1
    }
    getOrderByUser(formData).then((res: any) => {
      setOrderData(res.data.result.order_data)
    })
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  return(
    <div className='d-flex flex-column align-items-center'>
      <br/>
      <br/>
      <br/>
      <h3 className='theme-font'>Search Order By Order ID</h3>
      <div className='track-input my-4'>
        <Form.Group className="mb-2" controlId="formBasicCompany">
          <Form.Select
            className='w-100 form-control py-2 px-3 fs-7 text-muted'
            aria-label="Default select example"
            required={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value=''>Select Order No</option>
            {orderData?.map((item: any) => (
              <option value={item?.order_no}>{item?.order_no}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
      <button
        className='bg-theme-danger text-white px-5 mt-4 py-1 rounded theme-font border-0'
        type='button'
        onClick={() => handleSubmit()}
      >Search</button>
    </div>
  )
}
export default OrderTracking;
