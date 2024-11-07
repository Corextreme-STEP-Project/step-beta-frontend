import React from 'react'
import { useRole } from '../context/RoleContext'
import ProjectOwnerPage from '../pages/ProjectOwnerPage';
import MINMAPPage from '../pages/MINMAPPage';

const AppRoutes = () => {
    const { role } = useRole();

    if (role === 'ProjectOwner')
        return <ProjectOwnerPage />

    if (role === 'MINMAP')
        return <MINMAPPage />

    return (
        <div>
            Select a role to proceed.
        </div>
    )
}

export default AppRoutes