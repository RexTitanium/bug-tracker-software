import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import {signIn} from '../../Controller/Redux/authSlice'
import './login.css'
import { loginImages } from '../../Shared/images'
import Card from '@mui/material/Card'

function Login() {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        email:"",
        password:""
    })

    const handleChange =(e) => {
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        dispatch(signIn(formInput));
        e.preventDefault();
    }
  return (
    <div className='loginBg' style={{background: "url(" + loginImages[1] + ")"}}>
            <div className='login-container'>
                <form className='login-panel'>
                    <h1>Bug Tracker Login</h1>
                    <div className='login-box'>
                        <input name="email" type="email" placeholder='Email' onChange={handleChange} value={formInput.email}/>
                        <input name="password" type="password" placeholder='Password' onChange={handleChange} value={formInput.password} />
                    </div>
                    <button className='login-btn' type='submit' onClick={handleSubmit}>Login</button>
                </form>
                <div className='other-links'>
                    <h5>Forgot your <a href='/'>Password</a></h5>
                    <h5>Create an account? <a href='/'>Sign In</a></h5>
                    <h5>Sign in as a <a href='/'>Demo User</a></h5>
                </div>
            </div>
    </div>
  )
}

export default Login