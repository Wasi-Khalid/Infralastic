import './product-catalogue.scss';
import { Card } from "react-bootstrap";
import {fetchAllCategoryList} from "@infralastic/global-state";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../ItemTypes";
import {cartData, useGlobalDispatch, useGlobalSelector} from "@infralastic/global-state";

const ProductCatalogue = ({onData}: {onData: any}) => {
  const router = useNavigate();
  const [count, setCount] = useState(0);
  const dispatch = useGlobalDispatch();
  const globalDispatch = useGlobalDispatch()
  const [categoryData, setCategoryData] = useState<any>([]);
  const [droppedProducts, setDroppedProducts] = useState<any[]>([]);
  const { cartInfo } = useGlobalSelector((state) => state.cart);

// State to hold the dropped product data array
  function getCategory() {
    const config: any =  {}
    dispatch(fetchAllCategoryList(config)).then((res: any) => {
      console.log(res?.payload.result?.product_category_details)
      setCategoryData(res?.payload?.result?.product_category_details)
    })
  }
  const sendDataToParent = (data: any) => {
    onData(data);
  };

  useEffect(() => {
    getCategory()
  }, [])


  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    async drop(item: any) {
      if (item.productProps) {
        const newDroppedProducts = [...droppedProducts, { ...item.productProps, click: null }];
        setDroppedProducts(newDroppedProducts);
        const formData = {
          cart_data: newDroppedProducts
        }
        try {
          await globalDispatch(cartData(formData)).then((res: any) => {
            console.log(cartInfo)
          });
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

  const isActive = canDrop && isOver;

  return(
    <div ref={drop} className='py-3'>
      <Card>
        <Card.Body>
          <h5 className='theme-font'>Product Catalogue</h5>
          <p className='theme-font fs-7 text-muted'>Shop with Infralastic for all your needs</p>
          <div className="d-flex align-items-center overflow-auto">
            {droppedProducts?.map((item: any) => (
              <button className='px-1 bg-transparent border-0' onClick={() => sendDataToParent(item?.category_id)}>
                <img src={item?.image} width='152' height='80' alt="Top Deals" />
                <p
                  className='fs-7 mb-0 theme-font text-center py-2'>{item?.description}</p>
              </button>
            ))}
          </div>
          {isActive && <div style={{ margin: 20, color: 'green' }}>Release to drop</div>}
          <div style={{ margin: 20 }}>Items In Cart: {count}</div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCatalogue;
