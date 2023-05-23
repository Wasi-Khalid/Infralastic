import { Card } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";

const OperatingSystemFilter = () => {
  return(
    <div className='mb-3'>
      <Card className='p-2 rounded-4'>
        <Card.Body>
          <span className='d-flex w-100'>
            <h5 className='theme-font w-75 m-0'>Operating System</h5>
            <span className='w-25 d-flex justify-content-end align-items-center'>
              <BiChevronDown />
            </span>
          </span>
        </Card.Body>
      </Card>
    </div>
  )
}
export default OperatingSystemFilter;
