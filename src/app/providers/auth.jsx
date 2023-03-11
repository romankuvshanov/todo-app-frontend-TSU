import { useState, createContext, useContext } from "react";

const auth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, setIsAuthenticated };
};

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={auth()}>{children}</AuthContext.Provider>
);

export const withAuth = (component) => () =>
  <AuthProvider>{component()}</AuthProvider>;
