import React from "react";
import "./app-store.module.scss"

const AppStore = () => {
  return(
    <div className='h-100 py-3'>
      <iframe src="http://localhost:3001/app-store" className='w-100 h-100' />
    </div>
  )
}
export default AppStore;
