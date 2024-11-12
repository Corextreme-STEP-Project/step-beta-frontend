import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRole } from '../context/RoleContext';

export function AuthRoute({ children, requiredRole }) {
    const { role, isAuthenticated } = useRole();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    if (role !== requiredRole) {
        return <Navigate to="/unauthorized" />;
    }
    
    return children;
}

AuthRoute.propTypes = {
    children: PropTypes.node.isRequired,
    requiredRole: PropTypes.string.isRequired,
}; 