export default function TableRow({ data }) {
  return (
    <tr className="font-bold">
      {data.map((info, key) => (
        <td className={key !== 0 ? "text-center" : undefined}>{info}</td>
      ))}
    </tr>
  );
}
