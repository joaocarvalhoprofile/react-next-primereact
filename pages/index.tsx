import React, { useRef } from 'react'
import type { NextPage } from 'next'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button'
import { Chart } from 'primereact/chart'

const Home: NextPage = () => {

  const toast = useRef({} as Toast);
  const toastBC = useRef({} as Toast);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
  }

  const basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Vendas',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Devoluções',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90]
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
      <div className="card p-d-flex p-jc-center">
        <div className="card">
          <h5>Vertical</h5>
          <Chart type="bar" data={basicData} options={basicOptions} />
        </div>
      </div>

      <Toast ref={toast} />
      <Toast ref={toastBC} position="bottom-center" />
      <Button label="Success" className="p-button-success" onClick={showSuccess} />
    </div>
  )
}

export default Home
