import './product-card.scss';
import { Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../ItemTypes";
import warranty from '../../../assets/warranty.png'
import {AiFillHeart, AiFillPlusCircle, AiOutlineHeart, AiOutlinePlusCircle} from "react-icons/ai";
import {useState} from "react";
import {
  addCartList, addToCartList,
  addToWishList,
  deleteWishList,
  useGlobalDispatch, wishDelete
} from "@infralastic/global-state";
import {toast} from "react-toastify";

interface productProps {
  image: any;
  productId: any;
  description: string;
  inch: string;
  cost: string;
  click: any;
  purchase: any;
  userId: any
}

const ProductCard = (props: productProps) => {
  const router = useNavigate();
  const dispatch = useGlobalDispatch();
  const [wish, setWish] = useState(false);
  const queryParameters = new URLSearchParams(window.location.search);
  const user_id = queryParameters.get("user_id");
  const [{ isDragging }, drag] = useDrag<any, any, { isDragging: boolean }>({
    item: {
      type: ItemTypes.BOX,
      productProps: props,
      product_id: props.productId
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    type: ItemTypes.BOX
  });

  const addWishlist = (id: any) => {
    const formData: any = {
      wishlist_no: 1,
      product_id: id,
      user_id: props?.userId
    }
    dispatch(addToWishList(formData)).then((res: any) => {
      if (res?.payload?.success === true) {
        toast.success('Successfully Added to WishList');
      }
    })
  }
  const removeFromWishlist = (id: any) => {
    const formData: any = {
      wishlist_no: 1,
      product_id: id
    }
    dispatch(wishDelete(formData)).then((res: any) => {
      if (res?.payload?.success === true) {
        toast.success('Successfully Removed From WishList');
      }
    })
  }
  const addCartList = (id: any) => {
    const formData: any = {
      cartlist_no: 1,
      product_id: id
    }
    dispatch(addToCartList(formData)).then((res: any) => {
      if (res?.payload?.success === true) {
        toast.success('Successfully Added to CartList');
      }
    })
  }


  const handleWishList = () => {
    setWish(!wish);
    if (!wish) {
      addWishlist(props?.productId)
    } else if (wish) {
      removeFromWishlist(props?.productId)
    }
  }
  const handleCartList = () => {
      addCartList(props?.productId)
  }
  return(
    <div ref={drag}>
      <Card className='product-card-bg mb-3'>
        <Card.Body>
          <span className='theme-border-danger theme-danger fs-7 p-1 px-2 rounded text-uppercase'>Deal</span>
          <div className='d-flex justify-content-center py-3' onClick={props.click}>
            <img src={props.image} width='200' alt="bogus" />
          </div>
          <div className='d-flex justify-content-center w-100 py-2'>
            <img src={warranty} width='95' alt=""/>
          </div>
          <p className='mb-1 fs-7 theme-font theme-danger'>{props.inch}</p>
          <p className='theme-font'>{props.description}</p>
          <hr className='theme-danger '/>
          <p className='fs-7'>Infralastic estore price</p>
          <h5 className='theme-font theme-danger'>${props.cost}</h5>
          <span className='fs-7'><del>$1,699.99</del><span className='ms-2 theme-danger'>SAVE $200.00</span></span>
          <p className='py-3 theme-font fs-7'>This price may not refer to the specifications below.</p>
          <div className='d-flex w-100'>
            <div className="d-flex justify-content-start w-50">
                <button onClick={() => handleCartList()} className='border-0 rounded px-2 py-1 bg-transparent'>
                  <AiOutlinePlusCircle size={20} className='' />
                </button>
            </div>
            <div className="d-flex justify-content-end w-50">
              {!wish ?
                <button onClick={() => handleWishList()} className='border-0 rounded px-2 py-1 bg-transparent'><AiOutlineHeart size={20} className='' /></button>
                : wish ?
                  <button onClick={() => handleWishList()} className='border-0 rounded px-2 py-1 bg-transparent'><AiFillHeart size={20} className='theme-danger' /></button>
                : <></>
              }
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCard;
