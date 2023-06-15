import {Card} from "react-bootstrap";

const HardwareComponent = () => {
  return(
    <Card className='h-100'>
      <Card.Body>
        <div className="p-2">
          <h5 className='theme-font mb-4'>Hardware</h5>
          <hr/>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Vendor:</h6>
            <p className='theme-font fs-7 w-75'>Dell Inc.</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Model:</h6>
            <p className='theme-font fs-7 w-75'>Precision Tower 3620</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Serial Number:</h6>
            <p className='theme-font fs-7 w-75'>BJ488P2</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Motherboard:</h6>
            <p className='theme-font fs-7 w-75'>Dell Inc. 0MWYPT</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Processor:</h6>
            <p className='theme-font fs-7 w-75'>Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz - 4 cores</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Memory:</h6>
            <p className='theme-font fs-7 w-75'>16 GB</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Video Card:</h6>
            <p className='theme-font fs-7 w-75'>Intel(R) HD Graphics 630</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>Sound:</h6>
            <p className='theme-font fs-7 w-75'>NVIDIA High Definition Audio</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>System Drive:</h6>
            <p className='theme-font fs-7 w-75'>C</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className='theme-font w-25'>MAC Addresses:</h6>
            <p className='theme-font fs-7 w-75'>00:15:5D:2A:2E:47</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
export default HardwareComponent;
