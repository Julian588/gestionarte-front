import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import RegistrarGasto from "../layouts/RegistrarGasto";
import RegistrarCategoria from "../layouts/RegistrarCategoria";
import RegistrarMetodoPago from "../layouts/RegistrarMetodoPago";
import ConsultarMovimientos from "../layouts/ConsultarMovimientos";
import ConsultarUsuarios from "../layouts/ConsultarUsuarios";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="gasto" element={<RegistrarGasto />} />
        <Route path="categoria" element={<RegistrarCategoria />} />
        <Route path="metodo" element={<RegistrarMetodoPago />} />
        <Route path="movimientos" element={<ConsultarMovimientos />} />
        <Route path="usuarios" element={<ConsultarUsuarios />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
