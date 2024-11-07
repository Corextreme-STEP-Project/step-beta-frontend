import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

export function AuthGuard({ children, allowedRoles }) {
    const { role, isAuthenticated } = useRole();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
    }
    
    return children;
}

AuthGuard.propTypes = {
    children: PropTypes.node.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
}; 