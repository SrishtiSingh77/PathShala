import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-blue-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="object-cover w-full h-full opacity-20">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        {/* Deep Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to Pathshala
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-blue-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your journey to academic excellence starts here. Connect with the best coaching centers near you and start
          learning today!
        </motion.p>
        <motion.button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
