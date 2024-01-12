import { useState } from "react";
import Logo from "../Atoms/Logo";
import NavLink from "../Atoms/NavBar/NavLink";
import NavLinks from "../Molecules/NavLinks";
import MobileMenu from "../Molecules/MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState("nav-open");

  function handleClick() {
    if (isOpen === "nav-open") {
      setIsOpen("nav-close");
    } else {
      setIsOpen("nav-open");
    }

    console.log(isOpen);
  }

  return (
    <>
      {isOpen === "nav-close" && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={handleClick}
        ></div>
      )}

      <nav className="h-[6rem] px-9 flex justify-between items-center relative z-10">
        <Logo />
        <NavLinks>
          <div id={isOpen} onClick={handleClick} className="md:hidden">
            <div />
            <div />
          </div>
          {isOpen === "nav-close" && <MobileMenu />}
        </NavLinks>
        <div className="list-none hidden md:flex ">
          <NavLink>Inicio</NavLink>
          <NavLink>Quien soy?</NavLink>
          <NavLink>Obras</NavLink>
          <NavLink>Proyectos</NavLink>
          <NavLink>Reeleccion 2023</NavLink>
        </div>
      </nav>
    </>
  );
}
