import NavLink from "../Atoms/NavBar/NavLink";

export default function MobileMenu() {
  return (
    <div className="absolute w-[90%] left-1/2 top-[6rem] p-4 translate-x-[-50%] text-center flex flex-col bg-medium">
      <NavLink>Inicio</NavLink>
      <NavLink>Quien soy?</NavLink>
      <NavLink>Obras</NavLink>
      <NavLink>Proyectos</NavLink>
      <NavLink>Reeleccion 2023</NavLink>
    </div>
  );
}
