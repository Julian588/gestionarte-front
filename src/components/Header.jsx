import Logo from "../../public/assets/logo.svg";
import { useState } from "react";
import { HomeIcon, LoginIcon, MenuIcon } from "../../public/Icons";
import { Li } from "./Components";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isLogin = pathname === "/login";

  return (
    <header
      className=" flex flex-col bg-transparent w-screen fixed z-50 px-24 md:px-8 py-5 shadow backdrop-blur-xl animate-[small_linear_both] gap-2"
      style={{
        animationTimeline: "scroll(root block)",
        animationRange: "0 50vh ",
      }}
    >
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="w-28 h-28 p-2 bg-[#dddddd] drop-shadow-xl rounded-3xl transition duration-default ease-in-out hover:invert hover:scale-110 animate-[logoSmall_linear_both]"
          style={{
            animationTimeline: "scroll(root block)",
            animationRange: "0 50vh ",
          }}
        >
          <img src={Logo} alt="Logo de la pagina" />
        </Link>

        <nav className=" block md:hidden w-1/4">
          <ul className="flex gap-4">
            <Li path={"/"} isActive={isHome}>
              INICIO <HomeIcon />
            </Li>
            <Li path={"/login"} isActive={isLogin}>
              INICIAR SESIÓN <LoginIcon />
            </Li>
          </ul>
        </nav>
        <button
          className="hidden md:block p-2 bg-[#dddddd] rounded-xl transition duration-default ease-in-out  hover:invert hover:scale-110"
          type="button"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MenuIcon></MenuIcon>
        </button>
      </div>
      <div
        className="hidden md:block w-full transition-all p-2"
        style={
          showMenu
            ? {
                opacity: 1,
                visibility: "visible",
                transform: "scale(1)",
                height: "auto",
              }
            : {
                opacity: 0,
                visibility: "hidden",
                transform: "scale(0)",
                height: 0,
              }
        }
      >
        <nav>
          <ul className="flex flex-col justify-center items-center gap-5">
            <li className="w-full gap-2 text-xl drop-shadow-xl">
              <Link
                to={"/"}
                className="bg-[#dddddd] rounded-md flex items-center justify-center hover:scale-110 transition-all duration-default ease-in-out"
                style={
                  isHome ? { filter: "invert(100%)" } : { filter: "invert(0)" }
                }
              >
                INICIO <HomeIcon />
              </Link>
            </li>
            <li className="w-full gap-2 text-xl drop-shadow-xl">
              <Link
                to={"/login"}
                className="bg-[#dddddd] rounded-md flex items-center justify-center hover:scale-110 transition-all duration-default ease-in-out"
                style={
                  isLogin ? { filter: "invert(100%)" } : { filter: "invert(0)" }
                }
              >
                INICIAR SESIÓN <LoginIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
