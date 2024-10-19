import { useId } from "react";
import { Button, Field } from "./Components";
import useFormFields from "../Hooks/useFormFields";

function RegistrarGasto() {
  const gastoNombreId = useId();
  const gastoMontoId = useId();
  const gastoFechaId = useId();
  const gastoDescripcionId = useId();

  const [fields, handleFieldChange] = useFormFields({
    nombre: "",
    monto: "",
    fecha: "",
    descripcion: "",
  });

  return (
    <form className="relative px-52 py-12 xl:px-32 md:px-4 w-1/2 md:w-[380px] h-auto shadow-2xl rounded-md flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl text-center font-semibold">
        Por favor ingresa la siguiente información.
      </h2>
      <Field
        name={"Nombre del gasto:"}
        type={"text"}
        id={gastoNombreId}
        value={fields.nombre}
        onChange={(e) => handleFieldChange(e, fields.nombre)}
      />
      <Field
        name={"Monto:"}
        type={"number"}
        id={gastoMontoId}
        value={fields.monto}
        onChange={(e) => handleFieldChange(e, fields.monto)}
      />
      <Field
        name={"Fecha del gasto:"}
        type={"date"}
        id={gastoFechaId}
        value={fields.fecha}
        onChange={(e) => handleFieldChange(e, fields.fecha)}
      />
      <Field
        name={"Descripción del gasto:"}
        type={"text"}
        id={gastoDescripcionId}
        value={fields.descripcion}
        onChange={(e) => handleFieldChange(e, fields.descripcion)}
      />

      <Button>Registrar</Button>
    </form>
  );
}

export default RegistrarGasto;
