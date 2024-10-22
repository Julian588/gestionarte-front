import { Field, Button } from "../components/Components";
import { useId, useRef } from "react";
import useFormFields from "../Hooks/useFormFields";
import useLogin from "../Hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const fullNameId = useId();
  const ageId = useId();
  const cityId = useId();
  const phoneId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordVerifyId = useId();

  const { createUser } = useLogin();

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    age: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const fullNameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordVerifyRef = useRef();

  const registerUser = (e) => {
    e.preventDefault();
    if (
      fields.name &&
      fields.age &&
      fields.city &&
      fields.phone &&
      fields.email &&
      fields.password &&
      fields.passwordVerify
    ) {
      if (fields.password === fields.passwordVerify) {
        createUser(fields);
        alert("Usuario Creado exitosamente");
      } else {
        alert("Las Contraseñas no coinciden");
      }
    } else {
      if (!fields.name)
        fullNameRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.age)
        ageRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.city)
        cityRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.phone)
        phoneRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.email)
        emailRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.password)
        passwordRef.current.style.backgroundColor = "rgba(253, 60, 60, 0.342)";
      if (!fields.passwordVerify)
        passwordVerifyRef.current.style.borderColor =
          "rgba(253, 60, 60, 0.342)";
      alert("Por favor llenar todos los campos.");
    }
  };

  return (
    <section className="bg-[#fff] h-screen md:h-auto w-screen flex justify-evenly items-center flex-col pt-[152px] md:pt-[180px] md:pb-5">
      <div className="w-full flex justify-center items-center flex-col gap-3 ">
        <h1 className="text-6xl font-semibold text-shadow-md">Regístrate.</h1>
        <h2 className="text-2xl text-shadow md:text-lg">
          Y empieza a mejorar tu vida financiera
        </h2>
      </div>
      <form
        className="relative p-10 md:p-4 w-1/2 h-auto shadow-2xl rounded-md flex flex-col justify-around items-center gap-10 md:gap-2 md:w-[400px]"
        onSubmit={registerUser}
      >
        <div className="w-full" ref={fullNameRef}>
          <Field
            name={"Nombre Completo"}
            id={fullNameId}
            type={"text"}
            value={fields.name}
            onChange={(e) => {
              handleFieldChange(e, "name");
            }}
          />
        </div>

        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <div className="w-full" ref={ageRef}>
            <Field
              name={"Edad"}
              id={ageId}
              type={"number"}
              value={fields.age}
              onChange={(e) => {
                handleFieldChange(e, "age");
              }}
            />
          </div>

          <div className="w-full" ref={cityRef}>
            <Field
              name={"Ciudad"}
              id={cityId}
              type={"text"}
              value={fields.city}
              onChange={(e) => {
                handleFieldChange(e, "city");
              }}
            />
          </div>
        </div>
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <div className="w-full" ref={emailRef}>
            <Field
              name={"Correo Electrónico"}
              id={emailId}
              type={"email"}
              value={fields.email}
              onChange={(e) => {
                handleFieldChange(e, "email");
              }}
            />
          </div>

          <div className="w-full" ref={phoneRef}>
            <Field
              name={"Teléfono"}
              id={phoneId}
              type={"number"}
              value={fields.phone}
              onChange={(e) => {
                handleFieldChange(e, "phone");
              }}
            />
          </div>
        </div>
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <div className="w-full" ref={passwordRef}>
            <Field
              name={"Contraseña"}
              id={passwordId}
              type={"password"}
              value={fields.password}
              onChange={(e) => {
                handleFieldChange(e, "password");
              }}
            />
          </div>

          <div className="w-full" ref={passwordVerifyRef}>
            <Field
              name={"Verifique la contraseña"}
              id={passwordVerifyId}
              type={"password"}
              value={fields.passwordVerify}
              onChange={(e) => {
                handleFieldChange(e, "passwordVerify");
              }}
            />
          </div>
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
