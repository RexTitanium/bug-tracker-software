import React, { useState } from 'react'
import './bugView.css'
import BugViewSection from './component/bugViewSection'
import BugModel from '../../../Models/bugModel'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../../Controller/Redux/bugSlice'
import EditPanel from '../Edit delete/editPanel'
import EditBug from '../BugCreate/bugForm'

function BugView(props) {
    const dispatch = useDispatch()
    const bug = new BugModel(props.bug)
    const [displayEdit, setDisplayEdit] = useState(false)
    const priority = bug.priority == 1? 'Immediate' : bug.priority == 2 ? 'High' : bug.priority == 3 ? 'Medium' : 'Low'
    const type = bug.type == 1? 'Issue' : bug.type == 2 ? 'Bug' : 'Feature'
    const status = bug.status == 1? 'New' : bug.status == 2 ? 'In Progress' : 'Resolved'
    const editClicked =(e)=>{
        setDisplayEdit(!displayEdit)
    }

    const deleteClicked = (e) => {

    }

    console.log(bug)
    return (
    <>
    <div className='bug-view'>
        <EditPanel editClicked = {editClicked} deleteClicked={deleteClicked}/>
        <button className="close-btn" onClick={props.clicked}>Close</button>
        <h1>{bug.name}</h1>
        <BugViewSection title='Details' info={bug.details} />
        <BugViewSection title='Steps' info={bug.steps} />
        <BugViewSection title='Priority' info={priority} />
        <BugViewSection title='Creator' info={bug.creator} />
        <BugViewSection title='App Version' info={bug.version} />
        <BugViewSection title='Type' info={type} />
        <BugViewSection title='Status' info={status} />
        <BugViewSection title='Time Created' info={bug.time} />
        <button onClick={()=>{dispatch(markComplete())}}>Mark Complete</button>
    </div>
    {displayEdit && <EditBug title='Edit Bug' bug={bug} close={editClicked}/>}
    </>
  )
}

export default BugView