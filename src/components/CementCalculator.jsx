// Add to your components folder
import { useState } from "react";
import { motion } from "framer-motion";

export default function CementCalculator() {
  const [values, setValues] = useState({
    length: "",
    width: "",
    thickness: "",
    result: null,
  });

  const calculate = () => {
    const { length, width, thickness } = values;
    if (!length || !width || !thickness) return;

    const volume =
      (parseFloat(length) * parseFloat(width) * parseFloat(thickness)) / 12; // in cubic feet
    const bags = Math.ceil(volume * 0.037); // 0.037 bags per cubic foot
    setValues({ ...values, result: bags });
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div className="bg-primary-500 text-white p-6">
        <h3 className="text-xl font-bold">Cement Calculator</h3>
        <p className="text-primary-100">Estimate how many bags you need</p>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-cement-700 mb-1">Length (ft)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-cement-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={values.length}
              onChange={(e) => setValues({ ...values, length: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-cement-700 mb-1">Width (ft)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-cement-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={values.width}
              onChange={(e) => setValues({ ...values, width: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-cement-700 mb-1">Thickness (in)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-cement-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={values.thickness}
              onChange={(e) =>
                setValues({ ...values, thickness: e.target.value })
              }
            />
          </div>

          <button
            onClick={calculate}
            className="w-full bg-accent hover:bg-primary-700 text-white py-3 rounded-lg transition-colors duration-300"
          >
            Calculate
          </button>
        </div>

        {values.result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-cement-50 p-4 rounded-lg text-center"
          >
            <p className="text-cement-600">You will need approximately</p>
            <p className="text-3xl font-bold text-primary-500 my-2">
              {values.result}
            </p>
            <p className="text-cement-600">bags of ABC Cement</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
