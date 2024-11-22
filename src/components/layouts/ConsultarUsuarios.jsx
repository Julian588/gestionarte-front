import { useEffect, useState } from "react";
import { UserLi } from "../common/Components";
import { buscarUsuario } from "../../services/serviciosUsuarios";

function ConsultarUsuarios() {
  const getUsers = localStorage.getItem("registerUser");
  const users = JSON.parse(getUsers);
  const [datosAPI, setDatosAPI] = useState(null);
  const [estadoCarga, setEstadoCarga] = useState(true);

  useEffect(() => {
    buscarUsuario().then((res) => {
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
        <h2 className="text-3xl font-bold mb-14">Listado de Usuarios</h2>
        <ul className="h-auto place-content-start grid grid-cols-2 sm:grid-cols-1 gap-5 overflow-y-auto overflow-x-hidden py-5">
          {datosAPI.map((user, index) => {
            return <UserLi user={user} key={index} />;
          })}
        </ul>
      </>
    );
  }
}

export default ConsultarUsuarios;
