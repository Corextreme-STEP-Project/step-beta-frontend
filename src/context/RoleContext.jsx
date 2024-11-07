import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const RoleContext = createContext();

export function RoleProvider({ children }) {
    const [role, setRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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