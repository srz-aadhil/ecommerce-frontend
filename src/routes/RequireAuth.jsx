import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

export default function RequireAuth() {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
}
