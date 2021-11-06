import React, { useRef } from 'react'
import type { NextPage } from 'next'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { Chart } from 'primereact/chart'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const toast = useRef({} as Toast);
  const toastBC = useRef({} as Toast);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
  }

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

      <div className={styles.main}>
        <div className="card">
          <h5>Vertical</h5>
          <Chart type="bar" data={basicData} options={basicOptions} />
        </div>

        <Toast ref={toast} />
        <Toast ref={toastBC} position="bottom-center" />
        <Button label="Success" className="p-button-success" onClick={showSuccess} />
      </div>


    </div>
  )
}

export default Home
