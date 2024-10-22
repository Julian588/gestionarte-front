import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [registerUser, setRegisterUser] = useState(null);
  const navigate = useNavigate();

  const createUser = (user) => {
    setRegisterUser({
      id: new Date().getTime().toString(),
      fullName: user.fullName,
      age: user.age,
      city: user.city,
      phone: user.phone,
      email: user.email,
      password: user.password,
    });
    console.log(user);
  };

  const login = (loginData) => {
    if (
      registerUser &&
      registerUser.email === loginData.email &&
      registerUser.password === loginData.password
    ) {
      setIsLogin(true);
      alert(`Bienvenido! ${registerUser.fullName}`);
      navigate("/dashboard");
      return true;
    }
    alert("Contraseña o Correo incorrectos.");
    return false;
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        registerUser,
        createUser,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
