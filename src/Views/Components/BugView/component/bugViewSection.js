import './bugViewSection.css'
import React from 'react'

function BugViewSection(props) {
  return (
    <div className='view-section'>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default BugViewSection