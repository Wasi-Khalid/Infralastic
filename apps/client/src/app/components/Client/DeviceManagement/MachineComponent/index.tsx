import '../device-managment-component.scss';
import {Card, Col, Dropdown, Row} from "react-bootstrap";
import {BsFileEarmarkArrowUp, CiEdit} from "react-icons/all";
import DeviceCard from "../DeviceCard";
import image1 from '../../../../../assets/device-managment/hardware.png';
import image2 from '../../../../../assets/device-managment/disk.png';
import image3 from '../../../../../assets/device-managment/availability.png';
import image4 from '../../../../../assets/device-managment/perfomance.png';
import image5 from '../../../../../assets/device-managment/patches.png';
import image6 from '../../../../../assets/device-managment/general.png';


const MachineComponent = () => {
  return(
    <>
     <Card>
       <Card.Header className='bg-white p-3'>
         <div className='d-flex'>
           <div className="w-50">
             <p className='m-0 theme-font text-uppercase fs-5'>Alex Device</p>
             <div className="d-flex align-items-center">
               <div className='status-ico bg-success me-2'></div>
               <p className='theme-font m-0 fs-7'>Online</p>
             </div>
           </div>
           <div className="w-50">
             <div className='d-flex align-items-center justify-content-end'>
               <div className='mx-1'>
                 <Dropdown>
                   <Dropdown.Toggle className='bg-transparent border-0'>
                     <button className='bg-theme-danger text-white border-0 theme-font py-2 px-3 rounded'>
                       <BsFileEarmarkArrowUp size={18} className='me-1' /> Connect
                     </button>
                   </Dropdown.Toggle>

                   <Dropdown.Menu className='theme-font text-muted'>
                     <Dropdown.Item href="#/action-1">Splashtop</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">AnyDesk</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">TeamViewer</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">ScreenConnect</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </div>
               <div className='mx-1'>
                 <Dropdown>
                   <Dropdown.Toggle className='bg-transparent border-0'>
                     <button className='theme-border-danger bg-transparent theme-danger theme-font py-2 px-3 rounded'>
                        Manage
                     </button>
                   </Dropdown.Toggle>

                   <Dropdown.Menu className='theme-font fs-7 text-muted'>
                     <Dropdown.Item href="#/action-1">Service Manager</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Task Manager</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Software Inventory</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Software Installation</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Patch Management</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Event Viewer</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">User Activity</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Command Prompt</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Power Shell</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Run Script</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">File Transfer</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Registry Editor</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Restart</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Shutdown</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">HelpDesk Agent</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Webroot</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </div>
               <div className='mx-1'>
                 <button className='bg-transparent border-0'>
                   <CiEdit size={28} className='theme-danger' />
                 </button>
               </div>
             </div>
           </div>
         </div>
       </Card.Header>
       <Card.Body>
         <div className="d-flex">
           <div className="w-25">
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>Machine Name: </span><span className='theme-font text-muted'>Alex Device</span></h6>
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>Domain/Workgorup: </span><span className='theme-font text-muted'>WORKGROUP</span></h6>
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>Last Seen: </span><span className='theme-font text-muted'>March 8, 2023 11:49:13AM</span></h6>
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>Last Reboot Time: </span><span className='theme-font text-muted'>March 7, 2023 11:49:13AM</span></h6>
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>IP Address: </span><span className='theme-font text-muted'>10.0.0.1; 10.0.0.2; 10.0.0.3</span></h6>
             <h6 className='m-0 mb-3 fs-7'><span className='fw-semibold'>Folder: </span><span className='theme-font text-muted'>ENCOM</span></h6>
           </div>
           <div className="w-75 px-3">
             <Row>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-dark'}
                   image={image1}
                   name={'Hardware Alerts'}
                   value={0}
                   />
               </Col>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-warning'}
                   image={image2}
                   name={'Disk Alerts'}
                   value={0}
                   />
               </Col>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-dark'}
                   image={image3}
                   name={'Availability Alerts'}
                   value={0}
                   />
               </Col>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-theme-danger'}
                   image={image4}
                   name={'Performance Alerts'}
                   value={0}
                   />
               </Col>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-dark'}
                   image={image5}
                   name={'Available Patches'}
                   value={0}
                   />
               </Col>
               <Col md={2}>
                 <DeviceCard
                   background={'img-device-bg bg-warning'}
                   image={image6}
                   name={'General Alerts'}
                   value={0}
                   />
               </Col>
             </Row>
           </div>
         </div>
       </Card.Body>
     </Card>
    </>
  )
}
export default MachineComponent;