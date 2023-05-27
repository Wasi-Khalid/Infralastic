import './device-store.scss';
import ProductCatalogue from "../../components/DeviceStoreComponents/ProductCatalogue";
import { Col, Row } from "react-bootstrap";
import AllDevices from "../../components/DeviceStoreComponents/AllDevices";
import HardwareFilter from "../../components/DeviceStoreComponents/Filters/HardwareFilter";
import BrandFilter from "../../components/DeviceStoreComponents/Filters/BrandFilter";
import PriceFilter from "../../components/DeviceStoreComponents/Filters/PriceFilter";
import OperatingSystemFilter from "../../components/DeviceStoreComponents/Filters/OperatingSystemFilter";
import MemoryFilter from "../../components/DeviceStoreComponents/Filters/MemoryFilter";
import RamFilter from "../../components/DeviceStoreComponents/Filters/RamFilter";
import ScreenSizeFilter from "../../components/DeviceStoreComponents/Filters/ScreenSizeFilter";
import GenerationFilter from "../../components/DeviceStoreComponents/Filters/GenerationFilter";
import WarrantyFilter from "../../components/DeviceStoreComponents/Filters/WarrantyFilter";
import {useState} from "react";

const DeviceStore = () => {
  const [hardData, setHardData] = useState('');
  const [brandData, setBrandData] = useState('');

  const handleHardwareData = (childData: any) => {
    setHardData(childData);
  };
  const handleBrandData = (childData: any) => {
    setBrandData(childData);
  };
  return(
    <>
      <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
        <ProductCatalogue />
        <div>
          <Row>
            <Col md={3}>
              <div className="d-flex flex-column">
                <HardwareFilter onData={handleHardwareData} />
                <BrandFilter onData={handleBrandData} />
                <PriceFilter />
                <OperatingSystemFilter />
                <MemoryFilter />
                <RamFilter />
                <ScreenSizeFilter />
                <GenerationFilter />
                <WarrantyFilter />
              </div>
            </Col>
            <Col md={9}>
              <AllDevices
                hardwareCategory={hardData}
                brandData={brandData}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default DeviceStore;
