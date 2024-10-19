import { Field, Button } from "./Components";
import { useId } from "react";
import useFormFields from "./Hooks/useFormFields";

function Register() {
  const fullNameId = useId();
  const ageId = useId();
  const cityId = useId();
  const phoneId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordVerifyId = useId();

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    age: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  console.log(fields);

  return (
    <section className="bg-[#fff] h-screen md:h-auto w-screen flex justify-evenly items-center flex-col pt-[152px] md:pt-[180px] md:pb-5">
      <div className="w-full flex justify-center items-center flex-col gap-3 ">
        <h1 className="text-6xl font-semibold text-shadow-md">Regístrate.</h1>
        <h2 className="text-2xl text-shadow md:text-lg">
          Y empieza a mejorar tu vida financiera
        </h2>
      </div>
      <form className="relative p-10 md:p-4 w-1/2 h-auto shadow-2xl rounded-md flex flex-col justify-around items-center gap-10  md:gap-2 md:w-[400px]">
        <Field
          name={"Nombre Completo"}
          id={fullNameId}
          type={"text"}
          value={fields.name}
          onChange={(e) => handleFieldChange(e, "name")}
        />
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <Field
            name={"Edad"}
            id={ageId}
            type={"number"}
            value={fields.age}
            onChange={(e) => handleFieldChange(e, "age")}
          />
          <Field
            name={"Ciudad"}
            id={cityId}
            type={"text"}
            value={fields.city}
            onChange={(e) => handleFieldChange(e, "city")}
          />
        </div>
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <Field
            name={"Correo Electrónico"}
            id={emailId}
            type={"email"}
            value={fields.email}
            onChange={(e) => handleFieldChange(e, "email")}
          ></Field>
          <Field
            name={"Teléfono"}
            id={phoneId}
            type={"number"}
            value={fields.phone}
            onChange={(e) => handleFieldChange(e, "phone")}
          />
        </div>
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <Field
            name={"Contraseña"}
            id={passwordId}
            type={"password"}
            value={fields.password}
            onChange={(e) => handleFieldChange(e, "password")}
          ></Field>
          <Field
            name={"Verifique la contraseña"}
            id={passwordVerifyId}
            type={"password"}
            value={fields.passwordVerify}
            onChange={(e) => handleFieldChange(e, "passwordVerify")}
          ></Field>
        </div>
        <div className="flex w-1/2 items-center justify-center gap-5 md:w-full md:mt-5">
          <Button>Registrarse</Button>
          <Button isLink={true} path={"/login"}>
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Register;
