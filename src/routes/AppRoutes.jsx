import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthGuard } from '../component/AuthGuard';
import LoginForm from '../pages/logins/LoginForm';
import ProjectOwnerPage from '../pages/project-owner/ProjectOwnerPage';
import MinMapDashboard from '../pages/minmap/dashboard/MinMapDashboard';
import { ROLES } from '../constants/roles';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route
                path="/projectowner/*"
                element={
                    <AuthGuard allowedRoles={[ROLES.PROJECT_OWNER]}>
                        <ProjectOwnerPage />
                    </AuthGuard>
                }
            />

            <Route
                path="/dashboard/*"
                element={
                    <AuthGuard allowedRoles={[ROLES.MINMAP]}>
                        <MinMapDashboard />
                    </AuthGuard>
                }
            />

            <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}