import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import DbChart from '../../Components/Dashboard/cards' 
import {useDispatch, useSelector} from 'react-redux'
import { getBugs } from '../../../Controller/Redux/bugSlice';
import {getProjects} from '../../../Controller/Redux/projectSlice'
import DBPanel from '../../Components/Dashboard/panel'
import './dashboard.css'

function DashboardPage() {
    const dispatch = useDispatch()
    const bugs = useSelector(state => state.bugs);
    const projects = useSelector(state => state);
    const browserHistory = useNavigate();
    let priorityList = []
    let issueList = []
    let statusList=[]

    if(bugs != undefined) {
        for(let i=0; i<=3;i++){
            priorityList[i] = filterBugs(i+1)
        }
        for(let i=0; i<=2;i++){
            issueList[i] = filterBugsType(i+1)
            statusList[i] = filterBugsStatus(i+1)
        }
    }

    function redirect() {
        browserHistory('/viewbugs', {replace:true});
    }

    function filterBugs(priority) {
        return bugs.filter((bug) => {return bug.priority == priority})
    }

    function filterBugsType(type) {
        return bugs.filter((bug) => {return bug.type == type})
    }

    function filterBugsStatus(status) {
        return bugs.filter((bug) => {return bug.status == status})
    }

    const priorityState = {
        labels: ['Immediate','High','Mid','Low'],
        datasets: [
          {
            backgroundColor:["#C62727","#FEA82F", "#1C7947","#1F6CB0"],
            data: [priorityList[0].length,priorityList[1].length,priorityList[2].length, priorityList[3].length],
          }
        ]
      }

      const typeState = {
        labels: ['Issue','Bug','Feature'],
        datasets: [
          {
            backgroundColor:["#FEA82F","#C62727", "#1F6CB0"],
            data: [issueList[0].length,issueList[1].length,issueList[2].length],
          }
        ]
      }

      const statusState = {
        labels: ['New','In Progress','Resolved'],
        datasets: [
          {
            backgroundColor:["#FEA82F","#C62727", "#1F6CB0"],
            data: [statusList[0].length,statusList[1].length,statusList[2].length],
          }
        ]
      }

    useEffect(()=> {
        dispatch(getBugs())
    }, [bugs == undefined])

    useEffect(()=> {
      dispatch(getProjects())
  }, [projects == undefined])
  return (
    <div className='page-container'>
        <div className='empty'></div>
        <div className='database-container'>
          <div className='database-panel'>
            <DBPanel projects={projects}/>
          </div>
          <div className='database-cards'>
              <DbChart title='Priority' type="pie" data={priorityState} clicked={redirect}/>
              <DbChart title='Type' type='pie' data={typeState} clicked={redirect} />
              <DbChart title='Status' type='pie' data={statusState} clicked={redirect} />
          </div>
        </div>
    </div>
  )
}

export default DashboardPage