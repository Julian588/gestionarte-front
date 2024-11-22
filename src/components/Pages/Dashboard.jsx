import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../common/Components";
import { useEffect, useRef } from "react";
import useLogin from "../../Hooks/useLogin";

function Dashboard() {
  const { pathname } = useLocation();
  const sectionRef = useRef();
  const isDashboard = pathname === "/dashboard";
  const { isLogin, currentUser } = useLogin();
  const navigate = useNavigate();
  console.log(isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  console.log(pathname);

  useEffect(() => {
    if (!isDashboard) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <section className="w-full h-screen md:h-auto pt-[152px] flex flex-col justify-center items-center pb-10">
        <h1 className="text-6xl md:text-4xl font-semibold text-shadow-md mb-10 md:mt-7">
          Bienvenido! <span> {currentUser.nombres} </span>
        </h1>
        <h2 className="text-2xl text-shadow md:text-xl">
          Que quieres hacer hoy?
        </h2>
        <div className="w-1/2 h-auto grid grid-cols-2 md:grid-cols-1 gap-10 place-content-center mt-28">
          <Button type={"button"} isLink={true} path={"gasto"}>
            Registrar un gasto.
          </Button>
          <Button type={"button"} isLink={true} path={"categoria"}>
            Registrar una categoría.
          </Button>
          <Button type={"button"} isLink={true} path={"metodo"}>
            Registrar un método de pago
          </Button>
          <Button type={"button"} isLink={true} path={"movimientos"}>
            Consultar los gastos.
          </Button>
          <Button type="button" isLink={true} path={"usuarios"}>Consultar Usuarios</Button>
        </div>
      </section>
      {!isDashboard ? (
        <section
          className="h-screen w-full flex flex-col items-center justify-center py-12 md:py-10"
          ref={sectionRef}
        >
          <Outlet />
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Dashboard;
