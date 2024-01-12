import About from "./Organisms/About";
import ElectionResults from "./Organisms/ElectionResults";
import Footer from "./Organisms/Footer";
import HeroImage from "./Organisms/HeroSection";
import Navbar from "./Organisms/NavBar";
import Work from "./Organisms/Work";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <About />
      <Work />
      <ElectionResults />
      <Footer />
    </>
  );
}
