import './projectViewSection.css'
import React from 'react'

function ProjectViewSection(props) {
  return (
    <div className='view-section'>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default ProjectViewSection