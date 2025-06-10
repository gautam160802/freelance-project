import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="p-10 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold font-serif text-gray-800 mb-2">
        Contact Us
      </h2>
      <div className="h-1 w-16 bg-yellow-600 rounded mx-auto mb-4"></div>
      <div className="space-y-4 text-gray-600 text-lg">
        <p className="flex items-center justify-center gap-2">
          <MdEmail className="text-yellow-600" />
          <a
            href="mailto:abc.cement@gmail.com"
            className="text-blue-600 underline"
          >
            abc.cement@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdPhone className="text-yellow-600" /> +91 9876543210
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdLocationOn className="text-yellow-600" /> Patna, Bihar
        </p>
      </div>
    </motion.section>
  );
}
