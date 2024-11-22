import { useId, useRef } from "react";
import { Button, Field } from "../common/Components";
import useFormFields from "../../Hooks/useFormFields";
import { toast } from "sonner";
import toastStyle from "../../utils/toastStyle";
import { registrarGasto } from "../../services/serviciosGasto";

function RegistrarGasto() {
  const gastoNombreId = useId();
  const gastoMontoId = useId();
  const gastoFechaId = useId();
  const gastoDescripcionId = useId();

  const initialState = {
    monto: "",
    descripcion: "",
    fecha: "",
    nombre: "",
  };
  
  const [fields, setFields, handleFieldChange] = useFormFields(initialState);

  console.log(fields);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (
      !fields.nombre &&
      !fields.monto &&
      !fields.fecha &&
      !fields.descripcion
    ) {
      toast.error("Error", {
        description: "Por favor llenar todos los campos",
        richColors: true,
        position: "bottom-center",
        style: toastStyle,
      });
      return;
    }

    const { success, message } = await registrarGasto(fields);
    if (success) {
      toast.success("Perfecto!", {
        description: message,
        position: "bottom-center",
        style: toastStyle,
      });
      setFields(initialState);
    } else {
      toast.success("Error!", {
        description: "Error al guardar gasto",
        position: "bottom-center",
        richColors: true,
        style: toastStyle,
      });
      return;
    }
  };

  return (
    <form
      className="relative px-52 py-12 xl:px-32 md:px-4 w-1/2 md:w-[380px] h-auto shadow-2xl rounded-md flex flex-col justify-center items-center gap-10"
      onSubmit={handleOnSubmit}
    >
      <h2 className="text-2xl text-center font-semibold">
        Por favor ingresa la siguiente información.
      </h2>
      <Field
        name={"Nombre del gasto:"}
        type={"text"}
        id={gastoNombreId}
        value={fields.nombre}
        onChange={(e) => handleFieldChange(e, "nombre")}
      />
      <Field
        name={"Monto:"}
        type={"number"}
        id={gastoMontoId}
        value={fields.monto}
        onChange={(e) => handleFieldChange(e, "monto")}
      />
      <Field
        name={"Fecha del gasto:"}
        type={"date"}
        id={gastoFechaId}
        value={fields.fecha}
        onChange={(e) => handleFieldChange(e, "fecha")}
      />
      <Field
        name={"Descripción del gasto:"}
        type={"text"}
        id={gastoDescripcionId}
        value={fields.descripcion}
        onChange={(e) => handleFieldChange(e, "descripcion")}
      />

      <Button>Registrar</Button>
    </form>
  );
}

export default RegistrarGasto;
