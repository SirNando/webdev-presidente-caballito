import Table from "../Atoms/Table/Table";
import TableRow from "../Atoms/Table/TableRow";

export default function ElectionResults() {
  return (
    <div className="w-fit m-auto mb-8">
      <Table headings={["Partidos/Alianzas", "Paso", "Generales"]}>
        <TableRow data={["Juntos por el Cambio", "56.34%", "52.31%"]} />
        <TableRow data={["Union por la Patria", "56.34%", "52.31%"]} />
        <TableRow data={["La Libertad Avanza", "56.34%", "52.31%"]} />
        <TableRow data={["Frente de Izquierda", "3.34%", "5.46%"]} />
      </Table>
    </div>
  );
}
