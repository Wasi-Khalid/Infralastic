import Img from '../../../assets/completion.png'
import {useNavigate} from "react-router-dom";
const CheckoutComplete = () => {
  const router  = useNavigate()
  return(
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src={Img} width='934' height='608' alt=""/>
      <p className='theme-font fs-5 py-3 '>Your Order is Complete!</p>
      <button
        className='border-0 bg-theme-danger text-white py-2 px-3 rounded theme-font'
        onClick={() => router('/device-store')}
      >Back To Store</button>
    </div>
  )
}
export default CheckoutComplete;
