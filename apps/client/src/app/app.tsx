import React, {useEffect} from 'react';
import './app.module.scss';
import AppRoutes from "./routes/route";
import Layout from "./components/layout";
// import { Loader } from "@infralastic/loader";
import { useAppSelector } from "./services/store/hooks";

function App() {
  const userLoading = useAppSelector((state) => state.user.loading);
  const employeeLoading = useAppSelector((state) => state.employee.loading);
  const companyLoading = useAppSelector((state) => state.company.loading);
  const departmentLoading = useAppSelector((state) => state.department.loading);
  const assetLoading = useAppSelector((state) => state.asset.loading);
  useEffect(() => {
    document.title = 'Infralastic';
  }, []);
  return (
    <div className="App">
      {/*<Loader visible={userLoading || employeeLoading || companyLoading || departmentLoading || assetLoading} />*/}
      <Layout children={<AppRoutes />} />
    </div>
  );
}

export default App;
