import './order-tracking.scss';
import {useState} from "react";
import {useAppDispatch} from "../../services/store/hooks";
import {getOrderById} from "../../services/store/actions/OrderTracking";
import {createSearchParams, useNavigate} from "react-router-dom";

const OrderTracking = () => {
  const [value, setValue] = useState<any>(null);
  const dispatch = useAppDispatch();
  const router = useNavigate()

  const handleSubmit = () => {
    const formData: any = {
      order_no: value
    }
    dispatch(getOrderById(formData)).then((res: any) => {
      console.log(res)
      router({
        pathname: '/order-detail',
        search: `?${createSearchParams({
          orderId: '1'
        })}`
      })
    })
  }
  return(
    <div className='d-flex flex-column align-items-center'>
      <br/>
      <br/>
      <br/>
      <h3 className='theme-font'>Search Order By Order ID</h3>
      <div className='track-input my-4'>
        <input
          type="number"
          className='w-100 form-control py-2 px-3 fs-7'
          placeholder='Search Order By Order ID'
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
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
