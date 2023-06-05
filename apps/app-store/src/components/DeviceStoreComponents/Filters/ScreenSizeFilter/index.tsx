import {Card, Form} from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import {useState} from "react";

const ScreenSizeFilter = ({onData}: {onData: any}) => {
  const [show, setShow] = useState(false);

  const sendDataToParent = (data: any) => {
    onData(data);
  };

  return(
    <div className='mb-3'>
      <Card className='p-2 rounded-4'>
        <Card.Body>
          <span className='d-flex w-100'>
            <h5 className='theme-font w-75 m-0'>Screen Size</h5>
            <span className='w-25 d-flex justify-content-end align-items-center'>
              <BiChevronDown onClick={() => setShow(!show)} />
            </span>
          </span>
          {show && (
            <Form>
              <Form.Group className="mt-3" controlId="country">
                <Form.Select
                  className='bg-white fs-7 theme-font p-2 px-3'
                  aria-label="Default select example"
                  required={true}
                  onChange={(e: any) => sendDataToParent(e.target.value)}
                >
                  <option value=''>Select Screen Size</option>
                  <option value='20 Inch'>20 Inch</option>
                  <option value='24 Inch'>24 Inch</option>
                  <option value='32 Inch'>32 Inch</option>
                  <option value='40 Inch'>40 Inch</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}
export default ScreenSizeFilter;
