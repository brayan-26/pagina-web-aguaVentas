import { register, login, getProductos } from "../api/auths.js";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (values) => {
    try {
      const results = await register(values);
      const resultsData = results.status;
      setUser(results.data);
      setIsAuthenticated(true);
      return { resultsData: resultsData };
    } catch (error) {
      if (error.response) {
        const mensajeError = error.response.data.mensaje;
        const errorSatus = error.response.status;
        return { mensajeError: mensajeError, errorSatus: errorSatus };
      } else {
        console.log(error);
      }
    }
  };

  const loginUser = async (values) => {
    try {
      const results = await login(values);
      const resultsData = results.status;
      setUser(results.data);
      setIsAuthenticated(true);
      return { resultsData: resultsData };
    } catch (error) {
      if (error.response) {
        const mensajeError = error.response.data.mensaje;
        const errorSatus = error.response.status;
        return { mensajeError: mensajeError, errorSatus: errorSatus };
      } else {
        console.log(error);
      }
    }
  };

  const getProduct = async () => {
    try {
      const results = await getProductos();
      const aguacates = results.data.dataAguacate;
      const comercial = results.data.dataComercial;
      return { aguacates: aguacates, comercial: comercial };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        getProduct,
        user,
        isAuthenticated,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
