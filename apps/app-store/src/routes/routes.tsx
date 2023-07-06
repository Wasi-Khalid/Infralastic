import { Route, Routes} from "react-router-dom";
import DeviceStore from "../pages/DeviceStore";
import OrderTracking from "../pages/OrderTracking";
import DeviceDetail from "../pages/DeviceStore/DeviceDetail";
import DeviceCheckout from "../pages/DeviceStore/DeviceCheckout";
import CheckoutComplete from "../pages/DeviceStore/CheckoutComplete";
import OrderDetail from "../pages/OrderTracking/OrderDetail";

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
          path="/checkout-complete"
          element={<CheckoutComplete />}
        />
        <Route
          path="/order-tracking"
          element={<OrderTracking />}
        />
        <Route
          path="/order-detail"
          element={<OrderDetail />}
        />
      </Routes>
    </>
  )
}
export default ProductRoutes;
