import { useContext } from "react";
import { LoginContext } from "../Context/loginContext";

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("UseProducts must be within a ProductsProvider");
  }
  return context;
}

export default useLogin;
