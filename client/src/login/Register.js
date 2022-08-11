import React from 'react'
import { Button } from '@material-ui/core'
import "./style.css"
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img
                        src="https://thumbs.dreamstime.com/b/business-153419824.jpg"
                        alt="registerImg"
                    />
                </div>
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" name="confirm_password" placeholder="confirm password" />
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
                    Register
                </Button>
            </div>
            <div className="footer">
                <p>
                    Already have an account?
                    <Button
                        style={{ "textTransform": "none", "color": "#D9261C" }}
                        onClick={navigateToLogin}
                    >Sign in</Button>
                </p>
            </div>
        </div>
    )
}

export default Register