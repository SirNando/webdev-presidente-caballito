import About from "./Organisms/About";
import ElectionResults from "./Organisms/ElectionResults";
import Footer from "./Organisms/Footer";
import HeroSection from "./Organisms/HeroSection";
import Navbar from "./Organisms/NavBar";
import TextPills from "./Organisms/TextPills";
import Work from "./Organisms/Work";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <TextPills />
      <Work />
      <ElectionResults />
      <Footer />
    </>
  );
}
