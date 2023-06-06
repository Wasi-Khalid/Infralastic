import './device-store.scss';
import React from "react";

const DeviceStore = () => {
  return(
    <div className='h-100 py-3'>
      <iframe
        src="http://localhost:3001/device-store" className='w-100 h-100' />
    </div>
  )
}
export default DeviceStore;
