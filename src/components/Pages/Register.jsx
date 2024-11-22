import { Field, Button } from "../common/Components";
import { useId, useState } from "react";
import useFormFields from "../../Hooks/useFormFields";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import toastStyle from "../../utils/toastStyle";
import { registrarUsuario } from "../../services/serviciosUsuarios.js";

function Register() {
  const navigate = useNavigate();

  const fullNameId = useId();
  const ageId = useId();
  const cityId = useId();
  const phoneId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordVerifyId = useId();
  const fecha = new Date();

  const initialState = {
    fullName: "",
    age: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    passwordVerify: "",
  };
  const [fields, setFields, handleFieldChange] = useFormFields(initialState);

  console.log(fields);
  const registerUser = async (e) => {
    e.preventDefault();
    if (
      !fields.fullName &&
      !fields.age &&
      !fields.city &&
      !fields.phone &&
      !fields.email &&
      !fields.password &&
      !fields.passwordVerify
    ) {
      toast.error("Error", {
        description: "Por favor llenar todos los campos",
        richColors: true,
        position: "bottom-center",
        style: toastStyle,
      });
      return;
    }
    if (fields.password !== fields.passwordVerify) {
      toast.error("Error", {
        description: "Las contraseñas no coinciden",
        richColors: true,
        position: "bottom-center",
        style: toastStyle,
      });
      return;
    }

    const nuevoUsuario = {
      nombres: fields.fullName,
      edad: fields.age,
      telefono: fields.phone,
      correo: fields.email,
      contraseña: fields.password,
      fechaRegistro: fecha.toISOString().split("T")[0],
      ciudad: fields.city,
    };
    const { success, message } = await registrarUsuario(nuevoUsuario);
    if (success) {
      toast.success("Perfecto!", {
        description: message,
        position: "bottom-center",
        style: toastStyle,
      });
      navigate("/login");
    } else {
      toast.error("Error al crear usuario");
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
        <Field
          name={"Nombre Completo"}
          id={fullNameId}
          type={"text"}
          value={fields.fullName}
          onChange={(e) => handleFieldChange(e, "fullName")}
        />

        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <Field
            name={"Edad"}
            id={ageId}
            type={"number"}
            value={fields.age}
            onChange={(e) => {
              handleFieldChange(e, "age");
            }}
          />

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
        <div className="w-full flex md:flex-col gap-10 md:gap-2">
          <Field
            name={"Correo Electrónico"}
            id={emailId}
            type={"email"}
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />

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
          />

          <Field
            name={"Verifique la contraseña"}
            id={passwordVerifyId}
            type={"password"}
            value={fields.passwordVerify}
            onChange={(e) => handleFieldChange(e, "passwordVerify")}
          />
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
