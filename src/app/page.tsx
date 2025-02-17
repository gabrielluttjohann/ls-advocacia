import About from "@/sections/About";
import Cards from "@/sections/Cards";
import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ImageSpacing from "@/sections/ImageSpacing";
import Navbar from "@/sections/Navbar";
import Services from "@/sections/Services";
import Team from "@/sections/Team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ImageSpacing />
      <Cards />
      <Services />
      <Team />
      <Cta />
      <Footer />
    </main>
  );
}
