import './order-tracking.scss';
import React from "react";

const OrderTracking = () => {
  return(
    <div className='h-100 py-3'>
      <iframe src="https://infralastic-shop.infralastic.com/order-tracking" className='w-100 h-100' />
    </div>
  )
}
export default OrderTracking;
