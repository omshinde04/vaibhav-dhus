import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Books from "@/components/Books";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
     <About/>
     <Books/>
     <Awards/>
     <Contact/>
     <Footer/>
    </div>
  );
}
