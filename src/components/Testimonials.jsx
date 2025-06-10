// Add to your components folder
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "ABC Cement's 53 Grade OPC transformed our bridge construction project. The strength and consistency were unmatched.",
    name: "Rajesh Kumar",
    company: "InfraBuild Constructions",
    rating: 5,
  },
  // Add more testimonials
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header similar to others */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaQuoteLeft className="text-primary-500 text-3xl mb-4" />
              <p className="text-cement-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full"></div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-cement-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
