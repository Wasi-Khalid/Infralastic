import './reports-component.scss'
import icon1 from '../../../../../assets/icons/reportIcon.png';
import icon2 from '../../../../../assets/icons/reportIcon1.png';
import icon3 from '../../../../../assets/icons/reportIcon2.png';
import {FaPlus} from "react-icons/fa";
import ReportChart from "../../../Charts/ReportChart";

const ReportsComponent = () => {
  return(
      <div>
          <div className="shadow bg-white rounded p-3">
              <h5 className='theme-font mb-1'>Reports for all things</h5>
              <p className='fs-7 fw-light text-muted '>Monthly Overview</p>
              <div className='d-flex'>
                  <div className="reports d-flex flex-column align-items-center justify-content-center mx-2 p-3">
                      <img src={icon1} alt=""/>
                      <p className='m-0 mt-1 theme-font fs-7'>Assets</p>
                  </div>
                  <div className="reports d-flex flex-column align-items-center justify-content-center p-3 mx-2">
                      <img src={icon3} alt=""/>
                      <p className='m-0 mt-1 theme-font fs-7'>Faulted</p>
                  </div>
                  <div className="reports d-flex flex-column align-items-center justify-content-center p-3 mx-2">
                      <img src={icon2} alt=""/>
                      <p className='m-0 mt-1 theme-font fs-7'>New&nbsp;Added</p>
                  </div>
                  <div className="reports d-flex flex-column align-items-center justify-content-center p-3 mx-2">
                      <FaPlus className='text-secondary' />
                  </div>
              </div>
              <div className='chart-height'>
                  <ReportChart />
              </div>
          </div>
      </div>
  )
}
export default ReportsComponent;
