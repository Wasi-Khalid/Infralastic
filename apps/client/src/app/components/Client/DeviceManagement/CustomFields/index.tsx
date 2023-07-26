import {Card} from "react-bootstrap";

const CustomFields = () => {
  return(
    <Card className='h-100'>
      <Card.Body>
        <div className="p-2">
          <h5 className='theme-font mb-4'>Custom Fields</h5>
          <p className='theme-font fs-7'>PC Warranty Expiration: <span className='theme-danger'>1.6.2020</span></p>
          <p className='theme-font fs-7'>OS installation date: <span className='theme-danger'>15.01.2023</span></p>
          <p className='theme-font fs-7'>Shared Printer: <span className='theme-danger'>HP0214</span></p>
          <p className='theme-font fs-7'>Monitors Connected: <span className='theme-danger'>03</span></p>
          <p className='theme-font fs-7'>Department: <span className='theme-danger'>Marketing</span></p>
          <p className='theme-font fs-7'>Scheduled Maintenance: <span className='theme-danger'>1.06.2023</span></p>
        </div>
      </Card.Body>
    </Card>
  )
}
export default CustomFields;
