import './device-detail.scss'
import MachineComponent from "../../../../components/Client/DeviceManagement/MachineComponent";
import {Card, Col, Row} from "react-bootstrap";
import CustomFields from "../../../../components/Client/DeviceManagement/CustomFields";
import SoftwareComponent from "../../../../components/Client/DeviceManagement/SoftwareComponent";
import HardwareComponent from "../../../../components/Client/DeviceManagement/HardwareComponent";
import SecurityComponent from "../../../../components/Client/DeviceManagement/SecurityComponent";
import DiskComponent from "../../../../components/Client/DeviceManagement/DiskComponent";
import {useSearchParams} from "react-router-dom";
import {executeSaltCommands, getHostDetail, getIpAddress} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import MdmMap from "../../../../components/Map/MdmMap";

const DeviceDetail = () => {
  const MAPBOX_TOKEN ="pk.eyJ1Ijoid2FzaTkyMTAiLCJhIjoiY2xndjhvYmxnMmxvczNkbW0wbjFjamhlNiJ9.LzgcCec7AYnKErhYUUo70w";
  const [searchParams, setSearchParams] = useSearchParams();
  const [hostData, setHostData] = useState<any>(null);
  const [ipData, setIpData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let minion: any;
  const hostId: any = searchParams.get('hostId');
  const minionId: any = searchParams.get('minionId');
  function fetchDeviceDetails() {
    const config = hostId
    getHostDetail(config).then((res: any) => {
      setHostData(res.data.data.host);
      executeCommand("curl -sS https://api.ipify.org")
    })
  }

  function executeCommand(query: any) {
    const formData: any = {
      minionId: minionId,
      command: query
    };
    executeSaltCommands(formData).then((res: any) => {
      const ipAddress = res.data.data;
      if (ipAddress !== false) {
        findLatLng(ipAddress)
      }
    });
  }

  const findLatLng = (ip: any) => {
    const config: any = {
      params: {
        api_key: '48cd6b570e614d61a874edfbe7336881',
        ip_address: ip
      }
    }
    getIpAddress(config).then((res: any) => {
      setIpData(res.data);
      setIsLoading(false);
    })
  }
  useEffect(() => {
    fetchDeviceDetails();
  }, [])
  return(
    <div className='h-100'>
      <br/>
      <br/>
      <MachineComponent item={hostData} minionId={minionId} />
      <br/>
      <div className='map-row-2'>
        <Row className='h-100'>
          <Col md={8} className='h-100'>
            <Card className='h-100'>
              <MdmMap
                mapboxToken={MAPBOX_TOKEN}
                query={''}
                lat={ipData?.latitude ? ipData?.latitude : 0}
                lng={ipData?.longitude ? ipData?.longitude : 0}
                isLoading={isLoading}
              />
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
          <SoftwareComponent item={hostData} />
          <br/>
          <SecurityComponent hostId={hostId} />
        </Col>
        <Col md={6}>
          <HardwareComponent item={hostData} />
        </Col>
      </Row>
      <br/>
      <div>
        <DiskComponent item={hostData} />
      </div>
      <br/>
      <br/>
    </div>
  )
}
export default DeviceDetail;
