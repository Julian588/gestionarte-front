import useScrollToTop from "./Hooks/useScrollToTop";
import { Field, Button } from "./Components";
import { useId } from "react";
import useFormFields from "./Hooks/useFormFields";

function Login() {
  useScrollToTop();
  const emailId = useId();
  const passwordId = useId();

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  console.log(fields);

  return (
    <section className="h-screen w-screen flex justify-evenly items-center flex-col pt-[152px]">
      <div className="w-full flex justify-center items-center flex-col gap-3 ">
        <h1 className="text-6xl font-semibold text-shadow-md">Bienvenido.</h1>
        <h2 className="text-2xl text-shadow md:text-lg">
          Inicia Sesión para empezar a gestionar tus gastos.
        </h2>
      </div>
      <form className="relative px-52 xl:px-32 md:px-4 w-1/2 md:w-[380px] h-3/5 shadow-2xl rounded-md flex flex-col justify-center items-center gap-10">
        <Field
          name={"Correo Electrónico: "}
          id={emailId}
          type={"email"}
          value={fields.email}
          onChange={(e) => handleFieldChange(e, "email")}
        />
        <Field
          name={"Contraseña: "}
          id={passwordId}
          type={"password"}
          value={fields.password}
          onChange={(e) => handleFieldChange(e, "password")}
        />
        <div className="flex w-3/4 items-center justify-center gap-5 md:w-full md:flex-col mt-10">
          <Button>Iniciar Sesión</Button>
          <Button isLink={true} path={"/register"}>
            Registrarse
          </Button>
        </div>
        <span className="absolute bottom-2 w-auto text-nowrap">
          No tienes una cuenta? <span>Regístrate</span>
        </span>
      </form>
    </section>
  );
}

export default Login;
