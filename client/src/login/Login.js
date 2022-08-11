import { Button } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router'
import "./style.css"

const Login = () => {

    const navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/register')
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
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
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