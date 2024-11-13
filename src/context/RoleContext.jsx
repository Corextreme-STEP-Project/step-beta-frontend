import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserInfo } from '../services/auth';

const RoleContext = createContext();

export function RoleProvider({ children }) {
    const [role, setRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userInfo = await getUserInfo(token);
                    if (userInfo.status === 200 && userInfo.data.role) {
                        setRole(userInfo.data.role);
                        setIsAuthenticated(true);
                    } else {
                        // Invalid or expired token
                        localStorage.removeItem('token');
                        localStorage.removeItem('userRole');
                    }
                } catch (error) {
                    console.error('Error fetching user info:', error);
                    localStorage.removeItem('token');
                    localStorage.removeItem('userRole');
                }
            }
        };

        initializeAuth();
    }, []);

    const login = (userRole, token) => {
        setRole(userRole);
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', userRole);
    };

    const logout = () => {
        setRole(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
    };

    return (
        <RoleContext.Provider value={{ 
            role, 
            isAuthenticated, 
            login, 
            logout 
        }}>
            {children}
        </RoleContext.Provider>
    );
}

RoleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useRole() {
    return useContext(RoleContext);
}