import { Route, Routes} from "react-router-dom";
import AppStore from "../pages/AppStore";
import DeviceStore from "../pages/DeviceStore";
import OrderTracking from "../pages/OrderTracking";
import DeviceDetail from "../pages/DeviceStore/DeviceDetail";
import DeviceCheckout from "../pages/DeviceStore/DeviceCheckout";

const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/device-store"
          element={<DeviceStore />}
        />
        <Route
          path="/device-detail"
          element={<DeviceDetail />}
        />
        <Route
          path="/device-checkout"
          element={<DeviceCheckout />}
        />
        <Route
          path="/app-store"
          element={<AppStore />}
        />
        <Route
          path="/order-tracking"
          element={<OrderTracking />}
        />
      </Routes>
    </>
  )
}
export default ProductRoutes;
