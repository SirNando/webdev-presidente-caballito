import HighlightText from "../Atoms/HighlightText";
import ImageGallery from "../Molecules/ImageGallery";

export default function Work() {
  return (
    <>
      <div className="p-8 t text-dark">
        <h2 className="text-xl font-semibold mb-3">
          <HighlightText size={"2xl"}>Obras,</HighlightText> que ya podemos ver
        </h2>
        <ImageGallery />
      </div>
    </>
  );
}
