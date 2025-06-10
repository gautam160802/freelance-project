import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CementCalculator from "./components/CementCalculator";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <Testimonials />
      <CementCalculator />
      <WhatsAppButton />
    </div>
  );
}

export default App;
