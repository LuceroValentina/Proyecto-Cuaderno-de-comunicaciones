import { Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>; // opcional

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.rol)) {
    return (
      <Box p={4}>
        <Typography variant="h5" color="error">
          No tenés permisos para acceder a esta ruta.
        </Typography>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;
