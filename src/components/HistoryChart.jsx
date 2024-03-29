import { useParams } from "react-router-dom"
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
import moment from "moment/moment";
import Skeleton from "common/ui/Skeleton";
import { useGetHistoryChartQuery } from "features/Detail/api";

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

const HistoryChart = () => {

  const { id } = useParams()
  const { data: response, isFetching } = useGetHistoryChartQuery({ coinId: id })

  if (isFetching) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className='h-72 w-full mb-10' />
      </div>
    )
  }

  const coinChartData = response?.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default HistoryChart