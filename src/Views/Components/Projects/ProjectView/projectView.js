import React, { useState } from 'react'
import './projectView.css'
import ProjectViewSection from './component/projectViewSection'
import ProjectModel from '../../../../Models/projectModel'
import {useDispatch} from 'react-redux'
import EditPanel from '../../Edit delete/editPanel'
import EditProject from '../ProjectCreate/projectForm'

function ProjectView(props) {
    const dispatch = useDispatch()
    const project = new ProjectModel(props.project)
    const [displayEdit, setDisplayEdit] = useState(false)

    const editClicked =(e)=>{
        setDisplayEdit(!displayEdit)
    }

    const deleteClicked = (e) => {

    }

    return (
    <>
    <div className='project-view'>
        <EditPanel editClicked = {editClicked} deleteClicked={deleteClicked}/>
        <button className="close-btn" onClick={props.clicked}>Close</button>
        <h1>{project.name}</h1>
        <ProjectViewSection title='Details' info={project.details} />
        <ProjectViewSection title='Creator' info={project.creator} />
        <ProjectViewSection title='App Version' info={project.version} />
        <ProjectViewSection title='Time Created' info={project.time} />
    </div>
    {displayEdit && <EditProject title='Edit Project' project={project} close={editClicked}/>}
    </>
  )
}

export default ProjectView