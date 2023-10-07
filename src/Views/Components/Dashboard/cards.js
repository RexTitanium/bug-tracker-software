import './card.css'
import React from 'react'
import PriorityController from '../../../Controller/priorityController'
import 'chart.js/auto'
import {Chart} from 'react-chartjs-2';

function DbCard(props) {
    const {level,color} = PriorityController(props.priority)
    const options = {
      layout:{
        padding: 20,
      },
      tooltips: {
        enabled: false
      },
      plugins: {
        legend:{
          labels:{
            pointStyle: 'circle',
            usePointStyle: true,          }
        },
        labels: {
          formatter: (value, ctx) => {
            let datasets = ctx.chart.data.datasets;
            let percentage = 0;
            if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
              let sum = datasets[0].data.reduce((a, b) => a + b, 0);
              percentage = Math.round((value / sum) * 100) + '%';
              return percentage;
            } else {
              return percentage;
            }
          },
          color: '#fff',
        }
      }
    }


  return (
    <div className='dashboard-card' onClick={props.clicked} style={{color:color}}>
        <h2>Tickets by {props.title}</h2>
        <Chart type ={props.type} data={props.data} options={options}/>
    </div>
  )
}

export default DbCard