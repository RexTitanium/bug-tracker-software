import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './sidebar.css'
import {signOut} from '../../Controller/Redux/authSlice'
import {DashboardRounded as Dashboard, GroupAddRounded as Role, BugReportRounded as Bug, VisibilityRounded as View, ReorderRounded as Stack, PersonRounded as Profile} from '@mui/icons-material'

function Sidebar() {
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state)
    const SignOut =() => {
        dispatch(signOut());
    }
  return (
    <div className='sidebar'>
        <Link className='nav-link' to="/"><h1 className="brand">Bug-Tracker</h1></Link>
        <ul>
            <Link to='/'><li className='nav-link'><Dashboard/>Dashboard</li></Link>
            <Link to='/projects'><li className='nav-link'><Stack/>Projects</li></Link>
            <Link to='/viewbugs'><li className='nav-link'><View/>View Bugs</li></Link>
            {auth.admin && <Link to='/createbugs'><li className='nav-link'><Bug/>Create Bugs</li></Link> }
            {auth.admin && <Link to='/roleassign'><li className='nav-link'><Role/>Manage Roles</li></Link> }
            <Link to='/profile' className='user-profile'><li className='nav-link'><Profile/>Profile</li></Link>
        </ul>
        <div className='logout'>
          <button className='nav-link logout-btn' onClick={SignOut}>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar