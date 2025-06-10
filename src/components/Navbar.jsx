// export default function Navbar() {
//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-yellow-700">ABC Cement</h1>
//         <ul className="flex gap-6 text-gray-600 text-sm font-medium">
//           <li>
//             <a
//               href="#about"
//               className="hover:text-yellow-700 transition-colors duration-300"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#products"
//               className="hover:text-yellow-700 transition-colors duration-300"
//             >
//               Products
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="hover:text-yellow-700 transition-colors duration-300"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// \\\\\\\\\\\\\\\\

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-primary-700 font-serif">
            <span className="text-accent">ABC</span> Cement
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-cement-700 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-primary-500 transition-colors duration-300 flex flex-col items-center"
              >
                Home
                <span className="h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-accent hover:bg-primary-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cement-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#home"
              className="block py-2 text-cement-700 hover:text-primary-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-cement-700 hover:text-primary-500"
            >
              About
            </a>
            <a
              href="#products"
              className="block py-2 text-cement-700 hover:text-primary-500"
            >
              Products
            </a>
            <a
              href="#contact"
              className="block py-2 text-cement-700 hover:text-primary-500"
            >
              Contact
            </a>
            <button className="w-full bg-accent text-white py-2 rounded-md">
              Get Quote
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
