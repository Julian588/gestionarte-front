import { Name } from "../common/Components";

function Footer() {
  return (
    <footer className="flex flex-col w-screen items-center justify-between p-4 gap-10 text-[#dddddd] h-[20vh] md:h-auto bg-[#222]">
      <h3 className="text-4xl font-bold text-center">
        Trabajo desarrollado por:{" "}
      </h3>
      <div className="flex justify-center items-start gap-20 md:gap-5 flex-row md:flex-col ">
        <Name name={"Julian Camilo Agudelo Roman"} github={"Julian588"} />
        <Name name={"Laura Zapata"} github={"Laurazap"} />
        <Name name={"Jonatan Echavarria"} github={"Jonatanrios01"} />
      </div>
    </footer>
  );
}

export default Footer;
