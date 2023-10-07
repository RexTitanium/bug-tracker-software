import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../Controller/Redux/bugSlice'
import BugCard from '../Components/BugCard/bugCard'
import BugView from '../Components/BugView/bugView'

function ViewBugs() {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name:"",
    isDisplayed: false,
  })
  const dispatch = useDispatch();
  const {bugs} = useSelector(state => state);

  useEffect(()=>{
    dispatch(getBugs());
  }, [bugs.length < 1])

  function BugClicked(name){
    SET_DISPLAY_BUG({
      name: name,
      isDisplayed:!DISPLAY_BUG.isDisplayed,
    })
  }
  return (
    <div className='page-container'>
        {bugs.map((bug,key) => (
            <BugCard key={key} bug={bug} clicked={BugClicked}/>
        ))}
        {DISPLAY_BUG.isDisplayed && <BugView bug={bugs.filter((bug) => bug.name == DISPLAY_BUG.name)[0]} clicked={BugClicked}/>}
    </div>
  )
}

export default ViewBugs