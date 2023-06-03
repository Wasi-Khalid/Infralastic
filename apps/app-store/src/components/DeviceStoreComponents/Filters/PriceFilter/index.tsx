import { Card } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";

const PriceFilter = ({onData}: {onData: any}) => {
  const [show, setShow] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    onData({ minPrice, maxPrice });
  }, [minPrice, maxPrice]);
  return(
    <div className='mb-3'>
      <Card className='p-2 rounded-4'>
        <Card.Body>
          <span className='d-flex w-100'><h5 className='theme-font w-75 m-0'>Price</h5><span className='w-25 d-flex justify-content-end align-items-center'><BiChevronDown onClick={() => setShow(!show)} /></span></span>
          {show &&
            <div>
              <Form.Range />
              <div className='d-flex w-100 align-items-center'>
              <span className='w-50 m-2'>
                <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} type="number" className='w-100' />
                <p className='m-0 theme-font fs-8 mt-1 text-muted'>MIN</p>
              </span>
              -
              <span className='w-50 m-2'>
                <input className='w-100' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} type="number" />
                <p className='m-0 theme-font fs-8 mt-1 text-muted'>MAX</p>
              </span>
            </div>
            </div>
          }
        </Card.Body>
      </Card>
    </div>
  )
}
export default PriceFilter;
