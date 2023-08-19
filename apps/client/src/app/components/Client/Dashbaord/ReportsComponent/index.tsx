import './reports-component.scss'
import icon1 from '../../../../../assets/icons/reportIcon.png';
import icon2 from '../../../../../assets/icons/reportIcon1.png';
import icon3 from '../../../../../assets/icons/reportIcon2.png';
import {FaPlus} from "react-icons/fa";
import ReportChart from "../../../Charts/ReportChart";
import { Dropdown, Form } from 'react-bootstrap';

const ReportsComponent = () => {
  return(
      <div>
          <div className="shadow bg-white rounded p-3">
            <div className="w-100">
                <div className="d-flex w-100">
                <div className="d-flex flex-column w-50">
              <h5 className='theme-font mb-1 w-50'>Reports for all things</h5>
              <p className='fs-7 fw-light text-muted w-50'>Monthly Overview</p>
              </div>
              <div className='d-flex justify-content-end w-50'>
                <div className="">
              <Form.Select aria-label="Default select example">
              <option value="0">Select Filter</option>
              <option value="1">Assets</option>
              <option value="2">Department</option>
              <option value="3">Employee</option>
              </Form.Select>
              </div>
              </div>
              </div>

              <div className='chart-height'>
              <ReportChart />
            </div>
            </div>
          </div>
      </div>
  )
}
export default ReportsComponent;
