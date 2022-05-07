import React, { useContext } from "react";

export const AuthContextDefaultProps = {
  isSignedIn: false,
  signIn: () => {},
  user: null,
};

export const AuthContext = React.createContext(AuthContextDefaultProps);

export const useAuthContext = () => useContext(AuthContext);