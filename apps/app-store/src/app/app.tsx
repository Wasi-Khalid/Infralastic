import React from 'react';
import styles from './app.module.scss';
import ProductRoutes from "../routes/routes";
import "react-toastify/dist/ReactToastify.css";
import {Loader} from "@infralastic/loader";
import {useGlobalSelector} from "@infralastic/global-state";
import {ToastContainer} from "react-toastify";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  const userLoading = useGlobalSelector((state) => state.device.loading);


  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles['bg-layout']}>
        <ToastContainer autoClose={2000} />
        <Loader visible={userLoading} />
        <ProductRoutes />
      </div>
    </DndProvider>
  );
}

export default App;
