// import { motion } from "framer-motion";

// export default function Products() {
//   const products = [
//     "OPC Cement (43/53 Grade)",
//     "PPC Cement",
//     "Rapid Hardening Cement",
//     "White Cement",
//   ];

//   return (
//     <motion.section
//       id="products"
//       className="p-10 bg-gray-100 text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl font-bold font-serif text-gray-800 mb-2">
//         Our Products
//       </h2>
//       <div className="h-1 w-16 bg-yellow-600 rounded mx-auto mb-6"></div>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
//         {products.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-lg shadow p-6 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-yellow-500"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-semibold text-yellow-700">{item}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
// \\\\\\\\\\\\\

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const products = [
  {
    name: "OPC Cement (53 Grade)",
    description:
      "Ideal for high-strength concrete structures like bridges and high-rise buildings",
    features: [
      "High compressive strength",
      "Faster setting time",
      "Low chloride content",
    ],
    applications: ["RCC works", "Precast concrete", "Industrial structures"],
    color: "bg-blue-100",
  },
  {
    name: "PPC Cement",
    description: "Perfect for general construction with enhanced durability",
    features: [
      "Better workability",
      "Higher resistance to chemicals",
      "Reduced heat of hydration",
    ],
    applications: ["Masonry works", "Plastering", "Flooring"],
    color: "bg-green-100",
  },
  {
    name: "White Cement",
    description: "Premium cement for architectural and decorative applications",
    features: [
      "Brilliant white finish",
      "High strength",
      "Superior aesthetics",
    ],
    applications: ["Tile fixing", "Terrazzo", "Decorative concrete"],
    color: "bg-gray-100",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-cement-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cement-800 mt-2 mb-4">
            Premium Quality Cement
          </h2>
          <div className="h-1 w-16 bg-accent rounded mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${product.color} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-cement-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-cement-600 mb-4">{product.description}</p>

                <div className="mb-5">
                  <h4 className="font-medium text-cement-700 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-cement-700 mb-2">
                    Applications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-white/80 text-cement-700 px-3 py-1 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-white/50 border-t border-white/80">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg transition-colors duration-300">
                  Request Specifications
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-md p-8 text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-cement-800 mb-4">
            Need Technical Assistance?
          </h3>
          <p className="text-cement-600 max-w-2xl mx-auto mb-6">
            Our team of cement experts is available to help you select the right
            product for your project.
          </p>
          <button className="bg-accent hover:bg-primary-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300">
            Contact Our Engineers
          </button>
        </motion.div>
      </div>
    </section>
  );
}
