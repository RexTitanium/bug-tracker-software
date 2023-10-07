import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProjects} from '../../Controller/Redux/projectSlice'
import ProjectCard from '../Components/Projects/ProjectCard/projectCard'
import ProjectView from '../Components/Projects/ProjectView/projectView'

function ViewProjects() {
  const [DISPLAY_PROJECTS, SET_DISPLAY_PROJECTS] = useState({
    name:"",
    isDisplayed: false,
  })
  const dispatch = useDispatch();
  const {projects} = useSelector(state => state);
  useEffect(()=>{
    dispatch(getProjects());
  }, [projects.length < 1])

  console.log(projects)

  function ProjectsClicked(name){
    SET_DISPLAY_PROJECTS({
      name: name,
      isDisplayed:!DISPLAY_PROJECTS.isDisplayed,
    })
  }
  return (
    <div className='page-container'>
        {projects.map((project,key) => (
            <ProjectCard key={key} project={project} clicked={ProjectsClicked}/>
        ))}
        {DISPLAY_PROJECTS.isDisplayed && <ProjectView project={projects.filter((project) => project.name == DISPLAY_PROJECTS.name)[0]} clicked={ProjectsClicked}/>}
    </div>
  )
}

export default ViewProjects