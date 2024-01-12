import HighlightText from "../Atoms/HighlightText";
import ImageGallery from "../Molecules/ImageGallery";

const PICTURES = [
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/calistenia-centenario.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/calistenia-centenario.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/calistenia-centenario.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/calistenia-centenario.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/calistenia-centenario.jpg",
  },
];

const PICTURES_2 = [
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/honorio.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/honorio.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/honorio.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/honorio.jpg",
  },
  {
    title: "Calistenia Parque Centenario",
    description: "Hicimos booocha de cosas. Tipo, un re monton mal",
    src: "/projects/honorio.jpg",
  },
];

export default function Work() {
  return (
    <>
      <div className="p-6 t text-dark md:px-10">
        <h2 className="text-xl font-semibold mb-3">
          <HighlightText size={"2xl"}>Obras,</HighlightText> que ya podemos ver
        </h2>
        <ImageGallery pictures={PICTURES} />
        <h2 className="text-xl font-semibold mt-10 mb-3">
          <HighlightText size={"2xl"}>Proyectos</HighlightText> de obras
        </h2>
        <ImageGallery pictures={PICTURES_2} />
      </div>
    </>
  );
}
