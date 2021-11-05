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

  const clear = () => {
    toast.current.clear();
  }

  const chartData = {
    labels: ['Pagar', 'Receber', 'Fluxo de Caixa'],
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

  return (
    <div>
      <Button label="Save" />

      <div className="card p-d-flex p-jc-center">
        <Chart
          type="pie"
          data={chartData}
          options={lightOptions}
          style={{ position: 'relative', width: '40%' }}
        />
      </div>


      <div>
        <Toast ref={toast} />
        <Toast ref={toastBC} position="bottom-center" />

        <div className="card toast-demo">
          <h5>Severities</h5>
          <Button label="Success" className="p-button-success" onClick={showSuccess} />

          <h5>Clear</h5>
          <Button onClick={clear} label="Clear" />
        </div>
      </div>
    </div>
  )
}

export default Home
