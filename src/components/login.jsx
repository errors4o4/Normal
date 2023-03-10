import React from "react";
import './Login.css'
import { useState } from 'react';

function Login() {
    const [login, setLogin] = useState(false)
    const authenticate = () => {
        const userData = JSON.parse(localStorage.getItem(loginData.username))
        if (userData != null) {
            if (loginData.username === userData.username && loginData.password === userData.password) {
                console.log(true)
                setLogin(true)
            }
            else {
                if (userData.disability === 'Visual') setLogin(false)
                else {
                    alert('Invalid Credentials')
                    setLogin(false)
                }
            }
        }
        else {
            alert('Register First')
            setLogin(false)
        }
    }
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const getLoginInputs = (e) => {
        setLoginData(() => ({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <form  onSubmit={handleSubmit}>
            <div className="col-md-12">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail3"
                        name='username'
                        value={loginData.username}
                        onChange={getLoginInputs}
                    />
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-md-12">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        name='password'
                        value={loginData.password}
                        onChange={getLoginInputs}
                    />
                </div>
            </div>
            <div className="d-flex aligns-items-center justify-content-center">
                <div className="buttons-container">
                    {login ? <button type="submit" className="btn" id='login-btn' onClick={authenticate}>
                        <a href="/" className='nav-link'>Login</a>
                    </button> : <button type="submit" className="btn btn-primary m-2" id='login-btn' onClick={authenticate}>
                        Login
                    </button>}
                    <button type="submit" className="btn btn-primary" id='register-btn'>
                        <a className="nav-link" href='/register'>Register</a>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Login;