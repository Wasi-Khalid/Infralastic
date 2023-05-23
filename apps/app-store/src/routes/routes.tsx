import { Route, Routes} from "react-router-dom";
import AppStore from "../pages/AppStore";
import DeviceStore from "../pages/DeviceStore";
import OrderTracking from "../pages/OrderTracking";

const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/app-store"
          element={<AppStore />}
        />
        <Route
          path="/device-store"
          element={<DeviceStore />}
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
