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

const DeviceStore = () => {
  return(
    <>
      <div className='d-flex flex-column w-100 h-100vh overflow-y-scroll p-3'>
        <ProductCatalogue />
        <div>
          <Row>
            <Col md={3}>
              <div className="d-flex flex-column">
                <HardwareFilter />
                <BrandFilter />
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
              <AllDevices />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default DeviceStore;
