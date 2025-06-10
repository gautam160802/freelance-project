// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <motion.section
//       className="relative bg-cover bg-center bg-no-repeat p-20 text-center text-white shadow-md"
//       style={{ backgroundImage: "url('/cement-bg.jpg')" }}
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="bg-black bg-opacity-50 p-10 rounded-lg">
//         <h1 className="text-5xl font-extrabold mb-4">
//           Welcome to <span className="text-yellow-400">ABC Cement</span>
//         </h1>
//         <p className="text-xl mb-6">Building India with Strength and Trust</p>
//         <button className="mt-4 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded shadow transition">
//           Contact Us Now
//         </button>
//       </div>
//     </motion.section>
//   );
// }

// \\\\\\\\\

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cement-100 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/concrete-pattern.png')] bg-repeat bg-[length:400px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cement-800 leading-tight mb-6">
              Building <span className="text-primary-500">Stronger</span>{" "}
              Foundations for India
            </h1>
            <p className="text-lg text-cement-600 mb-8 max-w-lg">
              Premium quality cement trusted by builders and contractors across
              India for over 25 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 hover:bg-primary-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Our Products <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-1 rounded-xl shadow-2xl">
              <img
                src="/cement-bags-hero.jpg"
                alt="ABC Cement Products"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
