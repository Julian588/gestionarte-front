import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import RegistrarGasto from "./components/RegistrarGasto";
import RegistrarCategoria from "./components/RegistrarCategoria";
import RegistrarMetodoPago from "./components/RegistrarMetodoPago";
import ConsultarMovimientos from "./components/ConsultarMovimientos";
import LoginProvider from "./Context/loginContext";

function App() {
  return (
    <LoginProvider>
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
    </LoginProvider>
  );
}

export default App;
