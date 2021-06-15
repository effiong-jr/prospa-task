import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
  datasets: [
    {
      label: 'Expenses',
      data: [3, 7, 5, 7, 10, 8, 7],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const accountChart = () => (
  <>
    <Line data={data} options={options} />
  </>
)

export default accountChart
