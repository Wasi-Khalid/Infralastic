import { Card } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const BrandFilter = () => {
  const [show, setShow] = useState(true);
  return(
    <div className='mb-3'>
      <Card className='p-2 rounded-4'>
        <Card.Body>
          <span className='d-flex w-100'><h5 className='theme-font w-75 m-0'>Brand</h5><span className='w-25 d-flex justify-content-end align-items-center'><BiChevronDown onClick={() => setShow(!show)} /></span></span>
          {show &&
            <form className='mt-2'>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Apple (15)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>APC (1)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Acer (4)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Asus (3)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Belkin (8)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>BenQ (8)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Dell (17)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>HP (5)</label>
            </div>
            <div className='d-flex py-1'>
              <input type="checkbox" className='form-check-input' />
              <label className='text-muted fs-7 ms-2'>Jabra (4)</label>
            </div>
          </form>
          }
        </Card.Body>
      </Card>
    </div>
  )
}
export default BrandFilter;
