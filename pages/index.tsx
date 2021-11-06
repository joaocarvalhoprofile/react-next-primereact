import type { NextPage } from 'next'

import { Chart } from 'primereact/chart'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const chartData = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726"
        ],
        hoverBackgroundColor: [
          "#64B5F6",
          "#81C784",
          "#FFB74D"
        ]
      }
    ]
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  };

  const basicData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Vendas 2021',
        backgroundColor: '#42A5F5',
        data: [65.00, 59.145, 80.15, 81.00, 56.45, 55, 40, 451, 423, 477, 510, 515]
      }
    ]
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: .8,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    return {
      basicOptions
    }
  }

  const { basicOptions } = getLightTheme();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className="grid flex-initial">
        <div className="col-12 md:col-6 lg:col-3 sm:flex-nowrap">
          <Chart type="pie" data={chartData} options={lightOptions} />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <Chart type="bar" data={basicData} options={basicOptions} />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <Chart type="bar" data={basicData} options={basicOptions} />
        </div>
      </div>
    </div >
  )
}

export default Home
