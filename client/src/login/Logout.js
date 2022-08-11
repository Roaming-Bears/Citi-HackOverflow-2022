import React from 'react'
import AuthService from '../auth/AuthService'

const Logout = () => {
    AuthService.logout();
    window.location.href = '/explore'
    return (
        <div>You have been logged out. Redirecting...</div>
    )
}

export default Logout