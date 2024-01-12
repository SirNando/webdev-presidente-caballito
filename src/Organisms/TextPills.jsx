import TextPill from "../Atoms/TextPill";

export default function TextPills() {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:px-10">
      <TextPill>Hilo de Gestion</TextPill>
      <TextPill>Informe de Gestion</TextPill>
    </div>
  );
}
