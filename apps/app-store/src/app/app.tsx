import React from 'react';
import styles from './app.module.scss';
import ProductRoutes from "../routes/routes";
import "react-toastify/dist/ReactToastify.css";
import {Loader} from "@infralastic/loader";
import {useAppSelector} from "../services/store/hooks";
import {ToastContainer} from "react-toastify";

function App() {
  const userLoading = useAppSelector((state) => state.device.loading);


  return (
    <div className={styles['bg-layout']}>
      <ToastContainer autoClose={2000} />
      <Loader visible={userLoading} />
      <ProductRoutes />
    </div>
  );
}

export default App;
