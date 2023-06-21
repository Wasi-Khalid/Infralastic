import './reports.scss'
import {Card, Col, Form, Row} from "react-bootstrap";
import chartImg from '../../../../assets/Chart.png'
import ReportAssetChart from "../../../components/Charts/ReportAssetChart";
import {BiDotsVerticalRounded} from "react-icons/bi";
import PieChart from "../../../components/Charts/PieChart";
import ActivityReportComponent from "../../../components/Client/Reports/ActivityReportComponent";
const Reports = () => {
  return(
    <div className='h-100'>
      <br/>
      <Row>
        <Col md={8}>
          <Card className='w-100 p-2'>
            <Card.Body>
              <div className="d-flex w-100">
                <div className="w-75">
                  <h5 className='theme-font'>Assets Report</h5>
                  <div className="d-flex">
                    <ReportAssetChart />
                    <div className='vr'></div>
                  </div>
                </div>
                <div className="w-25">
                <div className="d-flex align-items-center flex-column">
                  <div className="w-50">
                    <Form>
                      <Form.Select aria-label="Default select example">
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                      </Form.Select>
                    </Form>
                  </div>
                  <div className='my-4'>
                    <p className='theme-danger theme-font fs-3 mb-0 text-center'>$25,825</p>
                    <p className='text-muted theme-font fs-7 text-center'>Budget: 56,800</p>
                    <img src={chartImg} alt=""/>
                  </div>
                  <button className='bg-theme-danger border-0 text-white rounded py-1 px-3 theme-font'>Download Report</button>
                </div>
              </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='p-2'>
            <Card.Body>
              <div className="d-flex w-100">
                <h5 className='w-75 theme-font'>Devices by Categories</h5>
                <div className="w-25 d-flex justify-content-end">
                  <i><BiDotsVerticalRounded size={20} /></i>
                </div>
              </div>
              <div className='d-flex justify-items-center w-100'>
                <PieChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className='my-3'>
        <ActivityReportComponent />
      </div>
    </div>
  )
}
export default Reports;
