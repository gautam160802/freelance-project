import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 py-6 mt-10 text-center text-sm text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      © {new Date().getFullYear()} ABC Cement. All rights reserved.
    </motion.footer>
  );
}
