import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextDefaultProps } from "./contexts/AuthContext";
import { Pages } from "./pages";

const App = () => {
  const navigate = useNavigate();
  const [authContext, setAuthContext] = useState(AuthContextDefaultProps);

  const handleSignIn = useCallback(() => {
    setAuthContext((prev) => ({
      ...prev,
      isSignedIn: true,
      user: {
        name: "Regina Zepeda",
      }
    }));
    navigate("/deliveries");
  }, [navigate]);

  useEffect(() => {
    setAuthContext((prev) => ({ ...prev, signIn: handleSignIn }));
  }, [handleSignIn]);

  return (
    <AuthContext.Provider value={authContext}>
      <Pages />
    </AuthContext.Provider>
  );
};

export { App };
