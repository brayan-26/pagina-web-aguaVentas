import { register } from "../api/auths.js";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const usecontext = useContext(AuthContext);
  if (!usecontext) {
    console.log("no hya contexto");
  }
  return usecontext;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const registerUser = async (values) => {
    try {
      const results = await register(values);
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser, 
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
