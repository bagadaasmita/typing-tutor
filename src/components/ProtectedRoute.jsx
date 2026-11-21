import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../store/authStore";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait until Supabase has checked the saved login
  if (loading) {
    return <div className="py-24 text-center text-gray-500">Loading...</div>;
  }

  // Not logged in: go to register, and remember the page they wanted
  if (!user) {
    return <Navigate to="/register" replace state={{ from: location.pathname }} />;
  }

  return children;
}