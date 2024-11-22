import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import toastStyle from "../utils/toastStyle";
import { buscarUsuario } from "../services/serviciosUsuarios";

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await buscarUsuario();
      setUsers(data);
    };
    fetchUsers();
    console.log("hola");
  }, [locationñ]);

  const login = async (loginData) => {
    const matchUser = users.find(
      (user) =>
        user.correo === loginData.email &&
        user.contraseña === loginData.password
    );
    if (!matchUser) {
      toast.error("Error al iniciar sesión.", {
        description: "El usuario o la contraseña es incorrecto",
        position: "bottom-center",
        richColors: true,
        style: toastStyle,
      });
      return;
    }
    new Promise((resolve) => {
      const findUser = users.findIndex(
        (user) =>
          user.correo === loginData.email &&
          user.contraseña === loginData.password
      );

      setIsLogin(true);
      setCurrentUser(users[findUser]);
      resolve();
    });
    navigate("/dashboard");
  };

  const logout = () => {
    setIsLogin(false);
    setCurrentUser("");
  };

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
