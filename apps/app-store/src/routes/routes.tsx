import { Route, Routes} from "react-router-dom";
import DeviceStore from "../pages/DeviceStore";
import OrderTracking from "../pages/OrderTracking";
import DeviceDetail from "../pages/DeviceStore/DeviceDetail";
import DeviceCheckout from "../pages/DeviceStore/DeviceCheckout";
import CheckoutComplete from "../pages/DeviceStore/CheckoutComplete";
import OrderDetail from "../pages/OrderTracking/OrderDetail";
import WishList from "../pages/DeviceStore/Wishlist";
import Invoice from "../pages/DeviceStore/Invoice";

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
          path="/wishlist-page"
          element={<WishList />}
        />
        <Route
          path="/order-tracking"
          element={<OrderTracking />}
        />
        <Route
          path="/order-detail"
          element={<OrderDetail />}
        />
        <Route
          path="/invoice"
          element={<Invoice />}
        />
      </Routes>
    </>
  )
}
export default ProductRoutes;
