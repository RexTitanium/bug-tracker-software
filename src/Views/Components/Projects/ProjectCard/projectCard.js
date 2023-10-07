import React from 'react'
import './projectCard.css'

const ProjectCard = (props)=> {
    const {name, details, creator} = props.project;
    const Clicked=()=>{
        props.clicked(name);
    }
    return (
    <div className='project-card' onClick={Clicked}>
        <h2 className='name'>{name}</h2>
        <h4 className='details'>Priority: {details}</h4>
        <h5 className='creator'>Created By: {creator}</h5>
    </div>
  )
}

export default ProjectCard