import { useState, useEffect } from "react";
import { WasteLi } from "../common/Components";
import { mostrarGastos } from "../../services/serviciosGasto";

function ConsultarMovimientos() {
  const [datosAPI, setDatosAPI] = useState(null);
  const [estadoCarga, setEstadoCarga] = useState(true);

  useEffect(() => {
    mostrarGastos().then((res) => {
      console.log(res);
      setDatosAPI(res);
      setEstadoCarga(false);
    });
  }, []);

  if (estadoCarga) {
    return <span>Estamos Cargando</span>;
  } else {
    return (
      <>
        <h2 className="text-3xl font-bold mb-14">Listado de Gastos</h2>
        <ul className="h-full place-content-start grid grid-cols-2 sm:grid-cols-1 gap-5 overflow-y-auto overflow-x-hidden">
          {datosAPI.map((waste, index) => {
            return <WasteLi waste={waste} key={index} />;
          })}
        </ul>
      </>
    );
  }
}

export default ConsultarMovimientos;
