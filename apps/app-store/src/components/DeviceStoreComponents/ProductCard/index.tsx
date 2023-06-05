import './product-card.scss';
import { Card } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../ItemTypes";

interface productProps {
  image: any;
  productId: any;
  description: string;
  inch: string;
  cost: string;
  click: any;
  purchase: any
}

const ProductCard = (props: productProps) => {
  const router = useNavigate();
  const [{ isDragging }, drag] = useDrag<any, any, { isDragging: boolean }>({
    item: {
      type: ItemTypes.BOX,
      productProps: props,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    type: ItemTypes.BOX
  });
  return(
    <div ref={drag}>
      <Card className='product-card-bg mb-3'>
        <Card.Body>
          <span className='theme-border-danger theme-danger fs-7 p-1 px-2 rounded text-uppercase'>Deal</span>
          <div className='d-flex justify-content-center py-3' onClick={props.click}>
            <img src={props.image} width='160' height='160' alt="bogus" />
          </div>
          <p className='mb-1 fs-7 theme-font theme-danger'>{props.inch}</p>
          <p className='theme-font'>{props.description}</p>
          <hr className='theme-danger '/>
          <p className='fs-7'>Infralastic estore price</p>
          <h5 className='theme-font theme-danger'>{props.cost}</h5>
          <span className='fs-7'><del>$1,699.99</del><span className='ms-2 theme-danger'>SAVE $200.00</span></span>
          <p className='py-3 theme-font fs-7'>This price may not refer to the specifications below.</p>
          <div className='d-flex justify-content-end'>
            <button onClick={props.purchase} className='bg-theme-danger border-0 rounded px-2 py-1'><BsCart2 className='text-white' /></button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCard;
