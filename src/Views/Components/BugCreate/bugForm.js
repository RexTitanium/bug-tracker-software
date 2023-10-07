import React,{useState} from 'react'
import BugModel from '../../../Models/bugModel'
import './bugForm.css'

function BugForm(props) {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug))

    const handleChange=(e)=> {
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className='bug-create'>
        {props.title == 'Edit Bug' && <button className='close-btn' onClick={props.close}>Close</button>}
        <h1>{props.title}</h1>
        <form>
            <label>Name:</label>
            <input name='name' placeholder='Bug Name' required onChange={handleChange} value={bugObject.name}></input>
            <label>Details:</label>
            <textarea name='details' placeholder='Detailed Description on the Bug' required onChange={handleChange} value={bugObject.details}></textarea>
            <label>Steps:</label>
            <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={handleChange} value={bugObject.steps}></textarea>
            <label>Priority:</label>
            <select name='priority' required onChange={handleChange} value={bugObject.assigned}>
                <option value='1'>High</option>
                <option value='2'>Mid</option>
                <option value='3'>Low</option>
            </select>
            <label>Assigned:</label>
            <select name='assigned' required onChange={handleChange} value={bugObject.assigned}>
                <option>Samyak Shah</option>
                <option>Shubh Shah</option>
            </select>
            <label>Application Version:</label>
            <input name='version' placeholder='Application Version' onChange={handleChange} value={bugObject.version}></input>
            <button type='submit'>{props.title}</button>
        </form>
    </div>
  )
}

export default BugForm