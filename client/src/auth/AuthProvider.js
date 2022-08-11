import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState({});
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ authenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}

