import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export function InfoCard({ icon: Icon, title, description, buttonText, buttonColor, borderColor, role }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className={`bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-t-4 ${borderColor} h-full`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className={`text-6xl ${buttonColor} mb-4`} />
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <motion.button
        onClick={() => navigate("/login", { state: { role } })}
        className={`${buttonColor} hover:${buttonColor.replace("500", "600")} text-white px-6 py-3 rounded-full font-medium transition duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  )
}

