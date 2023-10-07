import React from 'react'
import './bugCard.css'
import PriorityController from '../../../Controller/priorityController'

const BugCard = (props)=> {
    const {name, priority, version} = props.bug;
    const {level,color} = PriorityController(priority);
    const Clicked=()=>{
        props.clicked(name);
    }
    return (
    <div className='bug-card' onClick={Clicked} style={{color:color}}>
        <h2 className='name'>{name}</h2>
        <h4 className='priority'>Priority: {level}</h4>
        <h5 className='version'>Application Version: {version}</h5>
    </div>
  )
}

export default BugCard