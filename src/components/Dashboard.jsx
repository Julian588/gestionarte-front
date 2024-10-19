import { Outlet, useLocation } from "react-router-dom";
import { Button } from "./Components";
import { useEffect, useRef } from "react";

function Dashboard() {
  const { pathname } = useLocation();
  const sectionRef = useRef();
  const isDashboard = pathname === "/dashboard";

  console.log(pathname);

  useEffect(() => {
    if (!isDashboard) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <section className="w-full h-screen pt-[152px] flex flex-col justify-center items-center pb-10">
        <h1 className="text-6xl md:text-4xl font-semibold text-shadow-md mb-10">
          Bienvenido! <span> -Nombre- </span>
        </h1>
        <h2 className="text-2xl text-shadow md:text-xl">
          Que quieres hacer hoy?
        </h2>
        <div className="w-1/2 h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-1 gap-10 place-content-center mt-28">
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
        </div>
      </section>
      {!isDashboard ? (
        <section
          className="h-screen w-full flex justify-center items-center"
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
