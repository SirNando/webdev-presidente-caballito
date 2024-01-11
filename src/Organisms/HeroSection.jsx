import heroImage from "/hero-image.jpg";

export default function HeroSection() {
  return (
    <div className="h-[600px] relative">
      <img src={heroImage} className="w-full h-full object-cover" />
      <h1
        id="hero-title"
        className="text-5xl bottom-12 uppercase absolute font-extrabold text-center"
      >
        Vayamos por mas
      </h1>
    </div>
  );
}
