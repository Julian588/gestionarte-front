import { useContext } from "react";
import { LoginContext } from "../Context/loginContext";

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("UseLogin must be within a LoginProvider");
  }
  return context;
}

export default useLogin;
