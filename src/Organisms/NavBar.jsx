import { useState } from "react";
import Logo from "../Atoms/Logo";
import NavLink from "../Atoms/NavLink";
import NavLinks from "../Molecules/NavLinks";

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
          <div id={isOpen} onClick={handleClick}>
            <div />
            <div />
          </div>
          {isOpen === "nav-close" && (
            <div
              id="nav-links"
              className="absolute w-[90%] left-1/2 top-[6rem] p-4 translate-x-[-50%] text-center flex flex-col"
            >
              <NavLink>Inicio</NavLink>
              <NavLink>Quien soy?</NavLink>
              <NavLink>Obras</NavLink>
              <NavLink>Proyectos</NavLink>
              <NavLink>Reeleccion 2023</NavLink>
            </div>
          )}
        </NavLinks>
      </nav>
    </>
  );
}
