import { Figure } from "../components/Components";
import Img1 from "../../public/assets/figure1.jpg";
import Img2 from "../../public/assets/figure2.png";
import Img3 from "../../public/assets/figure3.jpg";

function Home() {
  return (
    <>
      <section
        className="w-screen h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url(../../public/assets/banner.jpg)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute z-40 w-full h-full flex flex-col items-center justify-center gap-8 shadow p-5"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <h1 className="text-slate-50 text-6xl md:text-3xl font-bold cursor-default drop-shadow-xl  ">
            Bienvenido a Gestionarte
          </h1>
          <p className="text-xl text-pretty text-slate-50 font-medium w-1/2 md:w-full md:text-lg">
            Gestionar tus ahorros nunca ha sido tan fácil. En Gestionarte, te
            ayudamos a tomar el control de tus finanzas de manera eficiente,
            inteligente y sin complicaciones. Nuestra plataforma está diseñada
            para simplificar la administración de tus ahorros, ofrecerte
            herramientas personalizadas y guiarte hacia tus metas financieras.
            Ya sea que estés ahorrando para una meta a corto plazo, como unas
            vacaciones soñadas, o construyendo un fondo a largo plazo, estamos
            aquí para acompañarte en cada paso del camino.
          </p>
        </div>
      </section>
      <section className="flex md:flex-col h-screen md:h-auto p-10 justify-center items-center gap-28 bg-[#dddddd]">
        <Figure
          img={Img1}
          title={"Evita deudas."}
          content={
            "Un gestor de gastos es una herramienta eficaz para evitar deudas, ya que te permite monitorear y identificar gastos innecesarios. Facilita la planificación de pagos importantes, evitando el uso de créditos para gastos inesperados. Además, al establecer límites de gasto, te ayuda a mantenerte dentro de tus posibilidades financieras, promoviendo decisiones más informadas y previniendo el endeudamiento."
          }
        />
        <Figure
          img={Img2}
          title={"Mejora Tus ingresos."}
          content={
            "Al categorizar y rastrear tus gastos, puedes identificar áreas donde estás gastando de más, reducir gastos innecesarios y establecer un presupuesto claro. Esto te permite ahorrar más dinero y reinvertirlo de manera eficiente, lo que a su vez puede incrementar tu capacidad de generar ingresos, ya sea a través de inversiones, ahorro o nuevas oportunidades financieras."
          }
        />
        <Figure
          img={Img3}
          title={"Controla tus Gastos"}
          content={
            "Identificar los gastos es fundamental para una buena gestión financiera, y un gestor de gastos facilita este proceso. Primero, se pueden categorizar los gastos en áreas como alimentación, transporte y entretenimiento, para obtener una mejor comprensión de en qué se está gastando. Luego, registrar todas las transacciones de manera regular, ya sea a través de la aplicación o manualmente, permite tener una visión clara de los gastos."
          }
        />
      </section>
    </>
  );
}

export default Home;
