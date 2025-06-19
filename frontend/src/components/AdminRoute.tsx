
import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userType = localStorage.getItem('userType');
  
  if (!isAuthenticated || userType !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
