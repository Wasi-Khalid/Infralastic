import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from "chart.js";
import {Bar} from "react-chartjs-2";
import '../chart.scss';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    }
};
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Assets',
            data: [12, 19, 3, 5, 2, 3, 9, 10, 15],
            backgroundColor: '#F81521',
        },
        {
            label: 'Department',
            data: [10, 20, 5, 3, 8, 9, 15, 20, 15],
            backgroundColor: 'rgba(248, 21, 33, 0.15)',
        },
        {
            label: 'Employee',
            data: [12, 19, 3, 5, 2, 3, 9, 10, 15],
            backgroundColor: 'blue',
        },
    ],
};
const ReportChart = () => {

  return(
      <div className='h-100'>
          <Bar options={options}  data={data}/>
      </div>
  )
}
export default ReportChart;