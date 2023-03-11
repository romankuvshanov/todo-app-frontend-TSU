import { useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../../app/providers/auth";

export default function RequireAuth({ children }) {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
