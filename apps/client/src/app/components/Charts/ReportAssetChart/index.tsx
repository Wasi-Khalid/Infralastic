import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Purchased',
      data: [14,12,28,36,40,19,30],
      borderColor: '#F81521',
      backgroundColor: '#F81521',
    },
    {
      fill: true,
      label: 'Assigned',
      data: [20,50,30,40,45,15,40],
      borderColor: '#FF9F43',
      backgroundColor: '#FF9F43',
    },
  ],
};

function ReportAssetChart() {
  return (
      <div className='d-flex justify-content-center report-page-charts-h'>
        <Line options={options} data={data} />
      </div>
    )
}
export default ReportAssetChart;
