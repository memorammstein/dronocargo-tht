import { Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { StyledPage } from "./StyledPage";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuthContext();

  if (!isSignedIn) {
    return <StyledPage>Sign in to view this</StyledPage>;
  }

  return children ? children : <Outlet />;
};

export { ProtectedRoute };
