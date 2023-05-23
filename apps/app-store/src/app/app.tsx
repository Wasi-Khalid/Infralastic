import React from 'react';
import styles from './app.module.scss';
import ProductRoutes from "../routes/routes";

function App() {

  return (
    <div className={styles['bg-layout']}>
      <ProductRoutes />
    </div>
  );
}

export default App;
