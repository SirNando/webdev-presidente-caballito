import HighlightText from "../Atoms/HighlightText";

export default function Description() {
  return (
    <>
      <div className="p-8 text-dark pb-4 my-auto">
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
    </>
  );
}
