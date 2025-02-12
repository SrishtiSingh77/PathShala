import { motion } from "framer-motion"
import { FaSearch, FaUserGraduate, FaChalkboardTeacher, FaMedal } from "react-icons/fa"

const features = [
  {
    icon: FaSearch,
    title: "Find Coaches",
    description: "Easily search and connect with top-rated coaching centers in your area.",
  },
  {
    icon: FaUserGraduate,
    title: "Personalized Learning",
    description: "Get customized learning plans tailored to your specific needs and goals.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert Instructors",
    description: "Learn from experienced and qualified instructors in various subjects.",
  },
  {
    icon: FaMedal,
    title: "Track Progress",
    description: "Monitor your academic growth with detailed progress tracking and analytics.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Pathshala?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

