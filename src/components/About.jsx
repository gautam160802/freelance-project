// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <motion.section
//       id="about"
//       className="p-10 bg-white text-center"
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl font-bold font-serif text-gray-800 mb-2">
//         About Us
//       </h2>
//       <div className="h-1 w-16 bg-yellow-600 rounded mx-auto mb-4"></div>
//       <p className="text-gray-600 max-w-2xl mx-auto">
//         With over a decade of excellence, ABC Cement delivers premium quality
//         cement trusted by builders and contractors across India.
//       </p>
//     </motion.section>
//   );
// }
// \\\\\\\\\\\\\

import { motion } from "framer-motion";
import { FiAward, FiHome, FiUsers } from "react-icons/fi";

export default function About() {
  const stats = [
    {
      value: "25+",
      label: "Years Experience",
      icon: <FiAward className="text-2xl" />,
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: <FiHome className="text-2xl" />,
    },
    {
      value: "10K+",
      label: "Satisfied Clients",
      icon: <FiUsers className="text-2xl" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium">WHO WE ARE</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cement-800 mt-2 mb-4">
            Building Trust Since 1998
          </h2>
          <div className="h-1 w-16 bg-accent rounded mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/cement-factory.jpg"
                alt="Our Factory"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-cement-800 mb-6">
              Pioneers in Cement Manufacturing
            </h3>
            <p className="text-cement-600 mb-6">
              ABC Cement has been at the forefront of India's construction
              revolution, providing high-quality cement products that form the
              backbone of the nation's infrastructure.
            </p>
            <p className="text-cement-600 mb-8">
              Our state-of-the-art manufacturing facilities and rigorous quality
              control processes ensure that every bag of ABC Cement meets the
              highest industry standards.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-cement-50 p-4 rounded-lg text-center"
                >
                  <div className="text-primary-500 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-cement-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-cement-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
