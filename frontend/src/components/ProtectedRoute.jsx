import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

// "Implementamos un componente ProtectedRoute que consulta el estado de autenticación desde un Context global. 
// Si el usuario no está autenticado, React Router lo redirige automáticamente al login mediante Navigate. 
// Si está autenticado, renderiza normalmente el layout administrativo."