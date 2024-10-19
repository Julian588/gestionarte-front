import { useId } from "react";
import { Button, Field } from "./Components";
import useFormFields from "./Hooks/useFormFields";

function RegistrarMetodoPago() {
  const metodoPagoId = useId();
  const descripcionId = useId();

  const [fields, handleFieldChange] = useFormFields({
    metodoPago: "",
    descripcion: "",
  });

  return (
    <form className="relative px-52 py-12 xl:px-32 md:px-4 w-1/2 md:w-[380px] h-auto shadow-2xl rounded-md flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl text-center font-semibold">
        Por favor ingresa la siguiente información.
      </h2>
      <Field
        name={"Metodo de pago:"}
        type={"text"}
        id={metodoPagoId}
        value={fields.metodoPago}
        onChange={(e) => handleFieldChange(e, fields.metodoPago)}
      />
      <Field
        name={"Monto:"}
        type={"number"}
        id={descripcionId}
        value={fields.descripcion}
        onChange={(e) => handleFieldChange(e, fields.descripcion)}
      />

      <Button>Registrar</Button>
    </form>
  );
}

export default RegistrarMetodoPago;
