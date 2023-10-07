import React from 'react'
import './panel.css'

function Panel(props) {
    return (
    <div className='panel-container'>
        <div className='panel-header'>
            <h1>Projects</h1>
            <button>New +</button>
        </div>
        <table className='panel-wrapper'>
            
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Project Details</th>
                    <th>Created By</th>
                </tr>
            </thead>
            <tbody>
            {props.projects.projects && props.projects.projects.map((project) => {
                return(
                    <tr className='project-panel'>
                        <td>{project.name}</td>
                        <td>{project.details}</td>
                        <td>{project.creator}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Panel