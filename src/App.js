import React from 'react'
import { useSelector } from 'react-redux';
import Login from "./Views/Login/login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Views/Sidebar/Sidebar';
import ViewBugs from './Views/Pages/viewbugs';
import BugForm from './Views/Components/BugCreate/bugForm'
import DashboardPage from './Views/Pages/Dashboard/dashboard';
import ViewProjects from './Views/Pages/viewProjects';

function App() {
  const {auth} = useSelector(state => state)

  function CreateBug({title}){
    return(
      <div className='page-container'>
        <BugForm title={title} />
      </div>
    )
  }
  return (
    <Router>
      <>
        {!auth.LoggedIn ? <Login/> : 
          <>
            <Sidebar/>
            <Routes>
              <Route exact path='/' element={<DashboardPage/>}/>
              <Route path='/projects' element={<ViewProjects/>}/>
              <Route path='/viewbugs' element={<ViewBugs/>}/>
              <Route path='/createbugs' element={<CreateBug title="Create Bug"/>}/>
            </Routes>
          </>
        }
      </>
    </Router>
  );
}

export default App;
