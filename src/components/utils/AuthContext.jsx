import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, loginUser, logoutUser } from "./storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function login(userData) {
    loginUser(userData);
    setUser(userData);
  }

  function logout() {
    logoutUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
