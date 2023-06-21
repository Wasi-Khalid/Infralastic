import {Card, Col, ProgressBar, Row} from "react-bootstrap";
import {FiHardDrive} from "react-icons/all";

const DiskComponent = ({item}: {item: any}) => {
  return(
    <>
      <Card>
        <Card.Header className='bg-white p-3'>
          <div className="d-flex">
            <div className="w-50">
              <p className='m-0 theme-font text-uppercase fs-5'>Disks</p>
            </div>
            <div className="w-50 d-flex justify-content-end align-items-center">
              <p className='m-0 theme-font'>Total&nbsp;Capacity&nbsp;<span className='theme-danger'>({item?.percent_disk_space_available}%)</span></p>
              <ProgressBar variant='danger' now={item?.percent_disk_space_available}  className='w-100 mx-2 mb-0' />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3}>
              <div className="d-flex w-100">
                <div className='w-25'>
                  <FiHardDrive size={52} />
                </div>
                <div className='w-75'>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Drive</h6>
                    <p className='theme-font w-75 fs-7 text-muted m-0'>C</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Free</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>20.25 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Used</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>216.48 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Total</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>236.73 GB</p>
                  </div>
                  <ProgressBar variant='danger' now={77}  className='w-100 mb-0' />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex w-100">
                <div className='w-25'>
                  <FiHardDrive className='theme-danger' size={52} />
                </div>
                <div className='w-75'>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Drive</h6>
                    <p className='theme-font w-75 fs-7 text-muted m-0'>C</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Free</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>20.25 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Used</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>216.48 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Total</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>236.73 GB</p>
                  </div>
                  <ProgressBar variant='danger' now={77}  className='w-100 mb-0' />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex w-100">
                <div className='w-25'>
                  <FiHardDrive size={52} />
                </div>
                <div className='w-75'>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Drive</h6>
                    <p className='theme-font w-75 fs-7 text-muted m-0'>C</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Free</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>20.25 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Used</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>216.48 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Total</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>236.73 GB</p>
                  </div>
                  <ProgressBar variant='danger' now={77}  className='w-100 mb-0' />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex w-100">
                <div className='w-25'>
                  <FiHardDrive size={52} />
                </div>
                <div className='w-75'>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Drive</h6>
                    <p className='theme-font w-75 fs-7 text-muted m-0'>C</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Free</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>20.25 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Used</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>216.48 GB</p>
                  </div>
                  <div className="d-flex align-items-center w-100 mb-2">
                    <h6 className='theme-font w-25 m-0'>Total</h6>
                    <p className='theme-font text-muted fs-7 w-75 m-0'>236.73 GB</p>
                  </div>
                  <ProgressBar variant='danger' now={77}  className='w-100 mb-0' />
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default DiskComponent;
