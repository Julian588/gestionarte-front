import { useId } from "react";
import { Button, Field } from "./Components";
import useFormFields from "./Hooks/useFormFields";

function RegistrarCategoria() {
  const categoriaNombreId = useId();
  const categoriaDescripcionId = useId();
  const categoriaImgId = useId();

  const [fields, handleFieldChange] = useFormFields({
    nombre: "",
    descripcion: "",
    img: "",
  });

  return (
    <form className="relative px-52 py-12 xl:px-32 md:px-4 w-1/2 md:w-[380px] h-auto shadow-2xl rounded-md flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl text-center font-semibold">
        Por favor ingresa la siguiente información.
      </h2>
      <Field
        name={"Nombre de la Categoría:"}
        type={"text"}
        id={categoriaNombreId}
        value={fields.nombre}
        onChange={(e) => handleFieldChange(e, fields.nombre)}
      />
      <Field
        name={"Descripción:"}
        type={"text"}
        id={categoriaDescripcionId}
        value={fields.descripcion}
        onChange={(e) => handleFieldChange(e, fields.descripcion)}
      />
      <Field
        name={"Fecha del gasto:"}
        type={"text"}
        id={categoriaImgId}
        value={fields.img}
        onChange={(e) => handleFieldChange(e, fields.img)}
      />

      <Button>Registrar</Button>
    </form>
  );
}

export default RegistrarCategoria;
