import { createContext, useState, useContext } from "react";

// 1️⃣ Crear el contexto
const UserContext = createContext();

// 2️⃣ Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

// 3️⃣ Hook para acceder al contexto (NO DEBE ESTAR DENTRO DEL RETURN ANTERIOR)
export const useUser = () => {
  return useContext(UserContext);
};
