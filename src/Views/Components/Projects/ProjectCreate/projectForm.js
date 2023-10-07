import React,{useState} from 'react'
import ProjectModel from '../../../../Models/projectModel'
import './projectForm.css'

function ProjectForm(props) {
    const [projectObject, setProjectObject] = useState(new ProjectModel(props.bug))

    const handleChange=(e)=> {
        setProjectObject({
            ...projectObject,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className='project-create'>
        {props.title == 'Edit Project' && <button className='close-btn' onClick={props.close}>Close</button>}
        <h1>{props.title}</h1>
        <form>
            <label>Name:</label>
            <input name='name' placeholder='Project Name' required onChange={handleChange} value={projectObject.name}></input>
            <label>Description:</label>
            <textarea name='details' placeholder='Detailed Description on the Bug' required onChange={handleChange} value={projectObject.details}></textarea>
            <label>Application Version:</label>
            <input name='version' placeholder='Application Version' onChange={handleChange} value={projectObject.version}></input>
            <label>Assigned:</label>
            <select name='assigned' type="checkbox" required onChange={handleChange} value={projectObject.assigned}>
                <option>Samyak Shah</option>
                <option>Shubh Shah</option>
            </select>
            <label>Created By:</label>
            <select name='creator' type="checkbox" required onChange={handleChange} value={projectObject.creator}>
                <option>Samyak Shah</option>
                <option>Shubh Shah</option>
            </select>
            <button type='submit'>{props.title}</button>
        </form>
    </div>
  )
}

export default ProjectForm