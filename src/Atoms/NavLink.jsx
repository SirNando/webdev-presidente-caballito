export default function NavLink({ href, children }) {
  return (
    <li className="p-2">
      <a className="uppercase" href={href}>
        <p className="text-xl font-semibold">{children}</p>
      </a>
    </li>
  );
}
