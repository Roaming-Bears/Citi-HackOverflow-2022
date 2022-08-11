import { Button } from '@material-ui/core'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'
import "./style.css"
import AuthContext from '../auth/AuthContext';
import AuthService from '../auth/AuthService';

const Login = () => {

    const navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/register')
    }

    const navigateToHomepage = () => {
        navigate('/explore')
    }

    const [role, setRole] = useState('client');
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleRadioChange = (e) => { setRole(e.target.value); };
    const handleUsernameChange = (e) => { setUsername(e.target.value); }
    const handlePasswordChange = (e) => { setPassword(e.target.value); }

    const authenticateUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        navigateToHomepage()
    }

    const login = () => {
        axios({ method: "GET", url: (role == 'client') ? "./clients" : "./managers" }).
            then((response) => {
                const res = response.data
                res.data.map((user) => (
                    (user.username == username) ? authenticateUser(user) : "")
                )
            }).
            catch((error) => {
                if (error.response) {
                    console.log(error.reponse)
                }
            })
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img
                        src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE="
                        alt="loginImg"
                    />
                </div>
                <div className="form">
                    <FormControl className="form-select">
                        <FormLabel>I am a...</FormLabel>
                        <RadioGroup
                            value={role}
                            onChange={handleRadioChange}
                            row
                        >
                            <FormControlLabel value="client" control={<Radio />} label="client" />
                            <FormControlLabel value="manager" control={<Radio />} label="manager" />
                        </RadioGroup>
                    </FormControl>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
            </div>
            <div className="button">
                <Button
                    variant="outlined"
                    color="#003b70"
                    style={{
                        "textTransform": "none",
                        "fontSize": "16px",
                    }}
                    onClick={login}
                >
                    Login
                </Button>
            </div>
            <div className="footer">
                <p>
                    Don't have an account?
                    <Button
                        style={{ "textTransform": "none", "color": "#D9261C" }}
                        onClick={navigateToRegister}
                    >Join us</Button>
                </p>
            </div>
        </div>
    )
}

export default Login