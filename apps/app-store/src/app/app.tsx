import React, {useEffect, useState} from 'react';
import styles from './app.module.scss';
import ProductRoutes from "../routes/routes";
import "react-toastify/dist/ReactToastify.css";
import {Loader} from "@infralastic/loader";
import {
  getCartList,
  getCartListById,
  getWishList, getWishListById,
  useGlobalDispatch,
  useGlobalSelector
} from "@infralastic/global-state";
import {ToastContainer} from "react-toastify";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {IoBasketOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {Dropdown} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

function App() {
  const dispatch = useGlobalDispatch();
  const userLoading = useGlobalSelector((state) => state.device.loading);
  const cartInfo = useGlobalSelector((state) => state.cart.cartInfo);
  const wishInfo = useGlobalSelector((state) => state.cart.wishInfo);
  const location = useLocation();
  const [wishCount, setWishCount] = useState<any>(null)
  const [cartCount, setCartCount] = useState<any>(null)
  const getWish = () => {
    const formData: any = {
      wishlist_no: 1
    }
    dispatch(getWishListById(formData)).then((res: any) => {
      setWishCount(res?.payload?.wishlist_details)
    })
  }
  useEffect(() => {
    getWish();
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles['bg-layout']}>
        {([`/device-store`, `/device-detail`, `/device-checkout`].includes(location.pathname)) &&
          <div className='d-flex justify-content-end px-3'>
            <div className="shadow d-flex bg-white rounded p-2">
              <Dropdown>
                <Dropdown.Toggle className='bg-transparent border-0 p-0 d-flex justify-content-center' id="dropdown-basic">
                  <button className='bg-transparent border-0'>
                    <div className="position-absolute mb-3 me-3">
                      <span className="rounded-circle px-1 fs-13 text-white bg-theme-danger">
                        {cartInfo?.cart_details?.length}
                      </span>
                    </div>
                    <IoBasketOutline className='m-1' size={26} />
                  </button>
                </Dropdown.Toggle>
                <Dropdown.Menu className='m-0 p-0'>
                  <div className="w-100">
                    <Link to='/device-checkout'>
                      <button className='bg-theme-danger border-0 text-white rounded px-3 py-1 w-100'
                      >View Cart</button>
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='bg-transparent border-0 p-0 d-flex justify-content-center' id="dropdown-basic">
                  <button className='bg-transparent border-0'>
                    <div className="position-absolute mb-3 me-3">
                      <span className="rounded-circle px-1 fs-13 text-white bg-theme-danger">
                        {wishInfo?.wishlist_details?.length}
                      </span>
                    </div>
                    <AiOutlineHeart className='m-1' size={26} />
                  </button>
                </Dropdown.Toggle>
                <Dropdown.Menu className='m-0 p-0'>
                  <div className="w-100">
                    <Link to='/device-checkout'>
                      <button className='bg-theme-danger border-0 text-white rounded px-3 py-1 w-100'
                      >View WishList</button>
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        }
        <ToastContainer autoClose={2000} />
        <Loader visible={userLoading} />
        <ProductRoutes />
      </div>
    </DndProvider>
  );
}

export default App;
