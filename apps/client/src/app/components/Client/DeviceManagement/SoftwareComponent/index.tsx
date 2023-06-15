import {Card} from "react-bootstrap";

const SoftwareComponent = () => {
  return(
    <Card>
      <Card.Body>
        <div className="p-2">
          <h5 className='theme-font mb-4'>Software</h5>
          <hr/>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>OS Edition:</h6>
            <p className='theme-font fs-7 w-75'>Microsoft Windows 10 Pro x64</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>OS Version:</h6>
            <p className='theme-font fs-7 w-75'>1903</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>OS Build:</h6>
            <p className='theme-font fs-7 w-75'>18362.592</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25 mb-0'>Office Version:</h6>
            <p className='theme-font fs-7 w-75 mb-0'>Microsoft Office 365 ProPlus, Build 16.0.12325.20298</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
export default SoftwareComponent;
