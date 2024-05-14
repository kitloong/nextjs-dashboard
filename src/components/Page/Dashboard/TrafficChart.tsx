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
import useDictionary from '@/locales/dictionary-hook'
import useComputedStyle from '@/hooks/use-computed-style'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

export default function TrafficChart() {
  const dict = useDictionary()
  const borderColor = useComputedStyle('--bs-border-color')
  const bodyColor = useComputedStyle('--bs-body-color')

  return (
    <Line
      data={{
        labels: [
          dict.dashboard.traffic.chart.xlabel1,
          dict.dashboard.traffic.chart.xlabel2,
          dict.dashboard.traffic.chart.xlabel3,
          dict.dashboard.traffic.chart.xlabel4,
          dict.dashboard.traffic.chart.xlabel5,
          dict.dashboard.traffic.chart.xlabel6,
          dict.dashboard.traffic.chart.xlabel7,
        ],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(13, 202, 240, 1)',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: [
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
          ],
          fill: true,
        }, {
          label: 'My Second dataset',
          borderColor: 'rgba(25, 135, 84, 1)',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: [
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
            random(50, 200),
          ],
        }, {
          label: 'My Third dataset',
          borderColor: 'rgba(220, 53, 69, 1)',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          borderDash: [8, 5],
          data: [65, 65, 65, 65, 65, 65, 65],
        }],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              color: borderColor,
              drawOnChartArea: false,
            },
            ticks: {
              color: bodyColor,
            },
          },
          y: {
            beginAtZero: true,
            border: {
              color: borderColor,
            },
            grid: {
              color: borderColor,
            },
            max: 250,
            ticks: {
              color: bodyColor,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
            },
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      }}
    />
  )
}
