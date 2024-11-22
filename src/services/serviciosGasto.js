export async function registrarGasto(datosGasto) {
  const URL = "http://localhost:8000/gastos";
  const peticion = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosGasto),
  };

  const res = await fetch(URL, peticion);
  const data = res.json();

  return { success: true, message: "Gasto guardado exitosamente", data: data };
}

export async function mostrarGastos() {
  const URL = "http://localhost:8000/gastos";
  let peticion = {
    method: "GET",
  };
  let res = await fetch(URL, peticion);
  let data = await res.json();
  return data;
}
