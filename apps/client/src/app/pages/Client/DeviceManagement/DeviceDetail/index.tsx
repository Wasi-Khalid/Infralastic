import './device-detail.scss'
import MachineComponent from "../../../../components/Client/DeviceManagement/MachineComponent";
import {Card, Col, Row} from "react-bootstrap";
import Map from "../../../../components/Map";
import CustomFields from "../../../../components/Client/DeviceManagement/CustomFields";
import SoftwareComponent from "../../../../components/Client/DeviceManagement/SoftwareComponent";
import HardwareComponent from "../../../../components/Client/DeviceManagement/HardwareComponent";
import SecurityComponent from "../../../../components/Client/DeviceManagement/SecurityComponent";
import DiskComponent from "../../../../components/Client/DeviceManagement/DiskComponent";

const DeviceDetail = () => {
  const MAPBOX_TOKEN ="pk.eyJ1Ijoid2FzaTkyMTAiLCJhIjoiY2xndjhvYmxnMmxvczNkbW0wbjFjamhlNiJ9.LzgcCec7AYnKErhYUUo70w";
  return(
    <div className='h-100'>
      <br/>
      <br/>
      <MachineComponent />
      <br/>
      <div className='map-row-2'>
        <Row className='h-100'>
          <Col md={8} className='h-100'>
            <Card className='h-100'>
              <Map mapboxToken={MAPBOX_TOKEN}/>
            </Card>
          </Col>
          <Col md={4} className='h-100'>
            <CustomFields />
          </Col>
        </Row>
      </div>
      <br/>
      <Row>
        <Col md={6}>
          <SoftwareComponent />
          <br/>
          <SecurityComponent />
        </Col>
        <Col md={6}>
          <HardwareComponent />
        </Col>
      </Row>
      <br/>
      <div>
        <DiskComponent />
      </div>
      <br/>
      <br/>
    </div>
  )
}
export default DeviceDetail;