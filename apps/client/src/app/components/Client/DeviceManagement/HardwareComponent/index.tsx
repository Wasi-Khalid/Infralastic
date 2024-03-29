import {Card} from "react-bootstrap";

const HardwareComponent = ({item}: {item: any}) => {
  function formatBytes(bytes:any, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  return(
    <Card className='h-100'>
      <Card.Body>
        <div className="p-2">
          <h5 className='theme-font mb-4'>Hardware</h5>
          <hr/>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Vendor:</p>
            <p className='theme-font fs-7 w-75'>{item?.hardware_vendor}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Model:</p>
            <p className='theme-font fs-7 w-75'>{item?.hardware_model}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Serial Number:</p>
            <p className='theme-font fs-7 w-75'>{item?.hardware_serial}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Motherboard:</p>
            <p className='theme-font fs-7 w-75'>Dell Inc. 0MWYPT</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Processor:</p>
            <p className='theme-font fs-7 w-75'>{item?.cpu_brand}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Memory:</p>
            <p className='theme-font fs-7 w-75'>{formatBytes(item?.memory)}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Video Card:</p>
            <p className='theme-font fs-7 w-75'>Intel(R) HD Graphics 630</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>Sound:</p>
            <p className='theme-font fs-7 w-75'>NVIDIA High Definition Audio</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>System Drive:</p>
            <p className='theme-font fs-7 w-75'>C</p>
          </div>
          <div className="d-flex align-items-center">
            <p className='theme-font w-25'>MAC Addresses:</p>
            <p className='theme-font fs-7 w-75'>{item?.primary_mac}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
export default HardwareComponent;
