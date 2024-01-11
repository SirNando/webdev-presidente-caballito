import HighlightText from "../Atoms/HighlightText";
import TextPill from "../Atoms/TextPill";

export default function Description() {
  return (
    <>
      <div className="p-8 t text-dark">
        <h2 className="text-2xl font-semibold mb-3">
          <HighlightText size={"3xl"}>Hola,</HighlightText> soy Fede
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          animi. Vel voluptates reiciendis assumenda est unde accusamus, totam
          perspiciatis ratione incidunt voluptatem error architecto odio
          repellat fugit id a asperiores.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <TextPill>Hilo de Gestion</TextPill>
        <TextPill>Informe de Gestion</TextPill>
      </div>
    </>
  );
}
