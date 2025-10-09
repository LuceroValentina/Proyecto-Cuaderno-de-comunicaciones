import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, rolesPermitidos }) => {
  const { user, rol, cargando } = useAuth();
 if (cargando) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

   if (rolesPermitidos && !rolesPermitidos.includes(rol)) {
    return <Navigate to="/sin-permiso" replace />;
  }

  return children;
};

export default ProtectedRoute;
