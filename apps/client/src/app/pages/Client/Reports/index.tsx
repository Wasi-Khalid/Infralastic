import './reports.scss'
import {Col, Row} from "react-bootstrap";
import ReportCard from "../../../components/Client/Reports/ReportCard";
import ReportChart from "../../../components/Charts/ReportChart";
import {BiPurchaseTag, BsActivity, CiHardDrive, GiReceiveMoney, MdInventory} from "react-icons/all";
import {useState} from "react";
import ActivityReportComponent from "../../../components/Client/Reports/ActivityReportComponent";
import InventoryReportComponent from "../../../components/Client/Reports/InventoryReportComponent";
import InvestmentReportComponent from "../../../components/Client/Reports/InvestmentReportComponent";
import PurchaseReportComponent from "../../../components/Client/Reports/PurchaseReportComponent";
const Reports = () => {
  const [activity, setActivity] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [investment, setInvestment] = useState(false);
  const [purchase, setPurchase] = useState(false);
  return(
    <div className='h-100'>
      <br/>
      <Row>
        <Col md={3}>
          <div className='py-3' onClick={() => {
            setActivity(true);
            setInventory(false);
            setInvestment(false);
            setPurchase(false)
          }}>
            <ReportCard
              name={'Activity Report'}
              children={<ReportChart />}
              icon={<BsActivity size={40} />}
            />
          </div>
        </Col>
        <Col md={3}>
          <div className='py-3' onClick={() => {
            setActivity(false);
            setInventory(true);
            setInvestment(false);
            setPurchase(false)
          }}>
            <ReportCard
              name={'Inventory Report'}
              children={<ReportChart />}
              icon={<MdInventory size={40} />}
            />
          </div>
        </Col>
        <Col md={3}>
          <div className='py-3' onClick={() => {
            setActivity(false);
            setInventory(false);
            setInvestment(true);
            setPurchase(false)
          }}>
            <ReportCard
              name={'Total Investment'}
              children={<ReportChart />}
              icon={<GiReceiveMoney size={40} />}
            />
          </div>
        </Col>
        <Col md={3}>
          <div className='py-3' onClick={() => {
            setActivity(false);
            setInventory(false);
            setInvestment(false);
            setPurchase(true)
          }}>
            <ReportCard
              name={'Purchases Report'}
              children={<ReportChart />}
              icon={<BiPurchaseTag size={40} />}
            />
          </div>
        </Col>
      </Row>
      {
          activity ? <ActivityReportComponent />
        : inventory ? <InventoryReportComponent />
        : investment ? <InvestmentReportComponent />
        : purchase ? <PurchaseReportComponent />
        :
          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiHardDrive size={300} />
            <h4>No Report Selected</h4>
          </div>
      }
    </div>
  )
}
export default Reports;
