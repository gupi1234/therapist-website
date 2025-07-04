import About from "./components/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
