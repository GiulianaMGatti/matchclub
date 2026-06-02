import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("matchclub_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    if (email === "admin@matchclub.com" && password === "1234") {
      const mockUser = {
        id: 1,
        name: "Administrador MatchClub",
        email: "admin@matchclub.com",
        role: "admin",
      };

      setUser(mockUser);
      localStorage.setItem("matchclub_user", JSON.stringify(mockUser));

      return { success: true };
    }

    return {
      success: false,
      message: "Email o contraseña incorrectos",
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("matchclub_user");
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };