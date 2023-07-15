import React, {useEffect, useState} from 'react';
import styles from './app.module.scss';
import ProductRoutes from "../routes/routes";
import "react-toastify/dist/ReactToastify.css";
import {Loader} from "@infralastic/loader";
import {getCartList, getWishList, useGlobalSelector} from "@infralastic/global-state";
import {ToastContainer} from "react-toastify";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {IoBasketOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {Dropdown} from "react-bootstrap";

function App() {
  const userLoading = useGlobalSelector((state) => state.device.loading);
  const [wishCount, setWishCount] = useState<any>(null)
  const [cartCount, setCartCount] = useState<any>(null)
  const getWish = () => {
    const formData: any = {
      wishlist_no: 1
    }
    getWishList(formData).then((res: any) => {
      setWishCount(res?.data?.result?.wishlist_details)
    })
  }
  const getCart = () => {
    const formData: any = {
      cartlist_no: 1
    }
    getCartList(formData).then((res: any) => {
      setCartCount(res?.data?.result?.cart_details)
    })
  }
  useEffect(() => {
    getWish();
    getCart();
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles['bg-layout']}>
        <div className='d-flex justify-content-end px-3'>
          <div className="shadow d-flex bg-white rounded p-2">
            <Dropdown>
              <Dropdown.Toggle className='bg-transparent border-0' id="dropdown-basic">
                <button className='bg-transparent border-0'>
                  <div className="position-absolute mb-3 me-3">
                    <span className="rounded-circle px-1 fs-13 text-white bg-theme-danger">
                      {cartCount?.length}
                    </span>
                  </div>
                  <IoBasketOutline className='m-1' size={26} />
                </button>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {cartCount?.map((item: any) => (
                  <Dropdown.Item href="#">{item?.product_name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className='bg-transparent border-0' id="dropdown-basic">
                <button className='bg-transparent border-0'>
                  <div className="position-absolute mb-3 me-3">
                    <span className="rounded-circle px-1 fs-13 text-white bg-theme-danger">
                      {wishCount?.length}
                    </span>
                  </div>
                  <AiOutlineHeart className='m-1' size={26} />
                </button>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {wishCount?.map((item: any) => (
                  <Dropdown.Item href="#">{item?.product_name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
        <Loader visible={userLoading} />
        <ProductRoutes />
      </div>
    </DndProvider>
  );
}

export default App;
