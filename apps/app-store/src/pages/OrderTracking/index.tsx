import './order-tracking.scss';

const OrderTracking = () => {
  return(
    <div className='d-flex flex-column align-items-center'>
      <br/>
      <br/>
      <br/>
      <h3 className='theme-font'>Search Order By Order ID</h3>
      <div className='track-input my-4'>
        <input
          type="text"
          className='w-100 form-control py-2 px-3 fs-7'
          placeholder='Search Order By Order ID'
        />
      </div>
      <button className='bg-theme-danger text-white px-5 mt-4 py-1 rounded theme-font border-0'>Search</button>
    </div>
  )
}
export default OrderTracking;
