 import './product-catalogue.scss';
import { Card } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../ItemTypes";
import {
  addToCartList,
  getCartList,
  getCartListById,
  useGlobalDispatch,
  useGlobalSelector
} from "@infralastic/global-state";
import {BsCart2} from "react-icons/bs";

const ProductCatalogue = ({onData}: {onData: any}) => {
  const router = useNavigate();
  const [count, setCount] = useState(0);
  const dispatch = useGlobalDispatch();
  const [cartCount, setCartCount] = useState<any>(null);
  const [droppedProducts, setDroppedProducts] = useState<any[]>([]);
  const cart = useGlobalSelector((state) => state.cart.cartInfo);
  const sendDataToParent = (data: any) => {
    onData(data);
  };


  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    async drop(item: any) {
      if (item.productProps) {
        const newDroppedProducts = [...droppedProducts, { ...item.productProps, click: null }];
        setDroppedProducts(newDroppedProducts);
        const product_id = item.product_id;
        const formData = {
          cartlist_no: 1,
          product_id: product_id
        }
        try {
          await dispatch(addToCartList(formData)).then((res: any) => {
            console.log(res)
          })
        } catch (error) {
          console.log(error)
        }
      }
      setCount(prevCount => prevCount + 1);
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  });
  const getCart = () => {
    const formData: any = {
      cartlist_no: 1
    }
    dispatch(getCartListById(formData)).then(async (res: any) => {
      console.log(res)
      setCartCount(res?.payload?.cart_details)
    })
  }

  useEffect(() => {
    getCart()
  }, [])

  const isActive = canDrop && isOver;

  return(
    <div ref={drop} className='py-3'>
      <Card>
        <Card.Body>
          <div className="d-flex w-100">
            <div className='w-75'>
              <h5 className='theme-font'>Product Catalogue</h5>
              <p className='theme-font fs-7 text-muted'>Shop with Infralastic for all your needs</p>
            </div>
            <div className='d-flex justify-content-end w-25'>
            <div>
              <Link to='/device-checkout'>
                <button className='bg-theme-danger border-0 rounded px-2 py-1'>
                  <BsCart2 className='text-white' />
                </button>
              </Link>
            </div>
          </div>
          </div>
          <div className="d-flex align-items-center overflow-auto">
            {/*{droppedProducts?.map((item: any, index: number) => (*/}
            {/*  <div key={index} className='px-1 bg-transparent border-0'>*/}
            {/*    <img src={item?.image} width='152' height='80' alt="Top Deals" />*/}
            {/*    <p className='fs-7 mb-0 theme-font text-center py-2'>{item?.description}</p>*/}
            {/*  </div>*/}
            {/*))}*/}
            {cart?.cart_details?.map((count: any, index: number) => (
              <div key={index} className='px-1 bg-transparent border-0'>
                <img src={count?.image} width='152' height='80' alt="Top Deals" />
                <p className='fs-7 mb-0 theme-font text-center py-2'>{count?.product_name}</p>
              </div>
            ))}
          </div>
          {isActive && <div>
            <h6 className='theme-font text-center'>Drop Items here</h6>
          </div>}
          {cart?.cartInfo?.map((item: any) => (
            <button className='px-1 bg-transparent border-0'>
              <img src={item?.image} width='152' height='80' alt="Top Deals" />
              <p
                className='fs-7 mb-0 theme-font text-center py-2'>{item?.product_name}</p>
            </button>
          ))}
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCatalogue;
