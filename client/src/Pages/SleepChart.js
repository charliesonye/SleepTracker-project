import React from 'react'
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



 function SleepChart({sleepRecords}) {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' ,
      },
      title: {
        display: true
      },
    },
  };
  
  const sleepRecordDates = sleepRecords?.map((record)=> `1/${record.date.slice(8)}`)

 const sleepRecordStartTime = sleepRecords?.map((record=> record.start_sleep.slice(0,2)))
  
 
  const sleepRecordEndTime = sleepRecords?.map((record)=> record.end_sleep.slice(0,2))
  const labels = sleepRecordDates
 
  const data = {
    
    labels,
    datasets: [
      {
        label: 'Start of Sleep Times(Bed Time)',
        data: labels.map((random, index) => sleepRecordStartTime[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'End of Sleep Times(Wake up)',
        data: labels.map((random, index) => sleepRecordEndTime[index]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  


 
  return (
    <div className='sleep-chart'>
    <h2><u>Sleep Chart</u></h2><br/>
    <Line options={options} data={data}  />

    
    
    </div>
  )
}

export default SleepChart