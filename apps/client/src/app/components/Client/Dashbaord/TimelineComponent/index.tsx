import {Col, Row} from "react-bootstrap";
import './timeline-component.scss';

const TimelineComponent = () => {
  return(
      <div className='h-100'>
          <div className="shadow bg-white rounded p-3 h-100 overflow-hidden">
              <Row className='h-100 overflow-auto'>
                  <Col md={1}></Col>
                  <Col md={11}>
                      <h5 className='mb-4 theme-font'>Activity Timeline</h5>
                      <div className='d-flex flex-column h-100'>
                          <div>
                              <h6 className='theme-font'>New asset</h6>
                              <p className='fs-7 text-muted theme-font'>Karen has added a new asset in inventory</p>
                          </div>
                          <div>
                              <h6 className='theme-font'>Create a new stock for client</h6>
                              <p className='fs-7 text-muted theme-font'>Create a new stock for client</p>
                          </div>
                          <div>
                              <h6 className='theme-font'>Shared 2 new devices</h6>
                              <p className='fs-7 text-muted theme-font'>Sent by Mollie Dixon</p>
                              <div className='d-flex'>
                                  <p className='fs-7'>App Guidelines</p>
                                  <p className='fs-7 ms-3'>Testing Results</p>
                              </div>
                          </div>
                          <div>
                              <h6 className='theme-font'>Project status updated</h6>
                              <p className='fs-7 text-muted theme-font'>WooCommerce iOS App Completed</p>
                          </div>
                      </div>
                  </Col>
              </Row>
              <h5></h5>
          </div>
      </div>
  )
}
export default TimelineComponent;