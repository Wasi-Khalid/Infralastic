import './asset-detail.scss';
import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IoIosUndo} from "react-icons/io";
import AssetTable from "../../../../components/Client/AssetDevices/AssetTable";
const AssetDetail = () => {
    const [location, setLocation] = useState(false);
    const [employee, setEmployee] = useState(false);
    const [reports, setReports] = useState(false);

    return(
        <>
            <div className="d-flex justify-content-center py-4 w-100 align-items-center">
                <Row className='w-100'>
                    <Col md={4}>
                        <div className='d-flex align-items-center  h-100'>
                            <h4 className='theme-font m-0'>Assets or Devices</h4>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="switcher">
                            <div className="card">
                                <div className="card-body d-flex p-2">
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setLocation(true);
                                            setEmployee(false);
                                            setReports(false);
                                        }}
                                        className={location ? 'w-100 text-white border-0 theme-font br-1 bg-theme-danger p-2 rounded' : 'w-100 bg-transparent border-0 theme-font br-1 p-2'}
                                    >
                                        Location
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setLocation(false);
                                            setEmployee(true);
                                            setReports(false);
                                        }}
                                        className={employee ? 'w-100 text-white border-0 theme-font br-1 bg-theme-danger p-2 rounded' : 'w-100 bg-transparent border-0 theme-font br-1 p-2'}
                                    >
                                        Employee
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setLocation(false);
                                            setEmployee(false);
                                            setReports(true);
                                        }}
                                        className={reports ? 'w-100 text-white border-0 theme-font bg-theme-danger p-2 rounded' : 'w-100 bg-transparent border-0 theme-font p-2'}
                                    >
                                        Reports
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex align-items-center h-100 justify-content-end'>
                            <h6 className='theme-font m-0'><IoIosUndo className='theme-danger' size={20} /> Showing all data against <a className='theme-danger'>LONDON</a></h6>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <AssetTable />
            </div>
        </>
    )
}
export default AssetDetail;
