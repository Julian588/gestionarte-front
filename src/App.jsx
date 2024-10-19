import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import RegistrarGasto from "./components/RegistrarGasto";
import RegistrarCategoria from "./components/RegistrarCategoria";
import RegistrarMetodoPago from "./components/RegistrarMetodoPago";
import ConsultarMovimientos from "./components/ConsultarMovimientos";

function App() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col w-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="gasto" element={<RegistrarGasto />} />
            <Route path="categoria" element={<RegistrarCategoria />} />
            <Route path="metodo" element={<RegistrarMetodoPago />} />
            <Route path="movimientos" element={<ConsultarMovimientos />} />
          </Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
