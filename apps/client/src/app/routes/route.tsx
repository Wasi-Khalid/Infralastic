import { Route, Routes} from "react-router-dom";
import ProtectedRoute, {ProtectedRouteProps} from "../guard/authGuard";
import Login from "../pages/Authentication/Login";
import ResetPassword from "../pages/Authentication/ResetPassword";
import ChangePassword from "../pages/Authentication/ChangePassword";
import Dashboard from "../pages/Client/Dashboard";
import EmployeeDetail from "../pages/Client/Employees/EmployeeDetail";
import Employees from "../pages/Client/Employees";
import EmployeeView from "../pages/Client/Employees/EmployeeView";
import AddEmployee from "../pages/Client/Employees/AddEmployee";
import Department from "../pages/Client/Department";
import AddDepartment from "../pages/Client/Department/AddDepartment";
import DepartmentMember from "../pages/Client/Department/DepartmentMember";
import AssetDevices from "../pages/Client/AssetDevices";
import AssetDetail from "../pages/Client/AssetDevices/AssetDetail";
import AddAsset from "../pages/Client/AssetDevices/AddAsset";
import AssetView from "../pages/Client/AssetDevices/AssetView";
import AllAsset from "../pages/Client/AssetDevices/AllAsset";
import ConfirmAsset from "../pages/Client/AssetDevices/ConfirmAsset";
import AddAttachments from "../pages/Client/AssetDevices/AddAttachments";
import CheckIn from "../pages/Client/AssetDevices/CheckIn";
import CheckOut from "../pages/Client/AssetDevices/CheckOut";
import AppStore from "../pages/Client/ProductStore/AppStore";
import DeviceStore from "../pages/Client/ProductStore/DeviceStore";
import OrderTracking from "../pages/Client/ProductStore/OrderTracking";

const AppRoutes = () => {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        authenticationPath: '/login',
    };
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />
                <Route
                    path="/change-password"
                    element={<ChangePassword />}
                />
                <Route
                    path="/employees"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Employees />} />}
                />
                <Route
                    path="/employee-view"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<EmployeeView />} />}
                />
                <Route
                    path="/add-employee"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddEmployee />} />}
                />
                <Route
                    path="/employee-detail"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<EmployeeDetail />} />}
                />
                <Route
                    path="/department"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Department />} />}
                />
                <Route
                    path="/add-department"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddDepartment />} />}
                />
                <Route
                    path="/department-member"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DepartmentMember />} />}
                />
                <Route
                    path="/assets"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AssetDevices />} />}
                />
                <Route
                    path="/asset-detail"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AssetDetail />} />}
                />
                <Route
                    path="/add-asset"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddAsset />} />}
                />
                <Route
                    path="/asset-view"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AssetView />} />}
                />
                <Route
                    path="/check-in"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CheckIn />} />}
                />
                <Route
                    path="/check-out"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CheckOut />} />}
                />
                <Route
                    path="/all-assets"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AllAsset />} />}
                />
                <Route
                    path="/confirm-assets"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ConfirmAsset />} />}
                />
                <Route
                    path="/add-asset-attachment"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddAttachments />} />}
                />
              <Route
                    path="/app-store"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AppStore />} />}
                />
              <Route
                    path="/device-store"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DeviceStore />} />}
                />
              <Route
                    path="/order-tracking"
                    element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OrderTracking />} />}
                />
            </Routes>
        </>
        )
}
export default AppRoutes;
