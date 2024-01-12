export default function Table({ children, headings }) {
  return (
    <table className="m-4 text-xs ">
      <tr className="bg-primary_light text-light">
        {headings.map((heading, key) => (
          <th
            className={`rounded-lg mx-4 text-sm ${
              key === 0 ? "text-left px-2" : "px-4"
            }`}
          >
            {heading}
          </th>
        ))}
      </tr>
      {children}
    </table>
  );
}
