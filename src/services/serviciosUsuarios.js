export async function registrarUsuario(datosUsuario) {
  const URL = "http://localhost:8000/usuarios";
  const peticion = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosUsuario),
  };
  const res = await fetch(URL, peticion);
  const data = res.json();

  return { success: true, message: "Usuario creado exitosamente", data: data };
}

export async function buscarUsuario() {
  const URL = "http://localhost:8000/usuarios";
  let peticion = {
    method: "GET",
  };
  let res = await fetch(URL, peticion);
  let data = await res.json();
  return data;
}
