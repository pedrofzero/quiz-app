import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  
    const token = localStorage.getItem('access_token');

  if (!token) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};