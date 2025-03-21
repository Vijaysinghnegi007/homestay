import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Redirect to home if the user is not an admin
  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
