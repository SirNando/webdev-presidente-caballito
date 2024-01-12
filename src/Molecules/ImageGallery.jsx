export default function ImageGallery({ pictures }) {
  return (
    <ul className="grid grid-cols-2 gap-2 w-full">
      {pictures.map((picture) => (
        <li className="relative">
          <img src={picture.src} className="h-full w-full object-contain" />
        </li>
      ))}
    </ul>
  );
}
