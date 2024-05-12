'use client'

import { Line } from 'react-chartjs-2'
import React from 'react'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

export default function UserChart() {
  return (
    <Line
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
            border: {
              display: true,
            },
          },
          y: {
            min: 30,
            max: 89,
            display: false,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 1,
            tension: 0.4,
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
          },
        },
      }}
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          data: [65, 59, 84, 84, 51, 55, 40],
        }],
      }}
    />
  )
}
