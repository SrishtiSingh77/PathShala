import { FaGraduationCap, FaUniversity } from "react-icons/fa"
import { HeroSection } from "../components/ui/HeroSection"
import { FeaturesSection } from "../components/ui/FeatureSection"
import {InfoCard} from "../components/ui/InfoCard"
import { StatisticsSection } from "../components/ui/StatisticsSection"
import TestimonialCarousel from "../components/ui/TestimonialCarousel"
import Contact from "../components/ui/Contact"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <HeroSection />

      <FeaturesSection />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Join Pathshala Today</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <InfoCard
            icon={FaGraduationCap}
            title="For Students"
            description="Find top coaching centers near you and elevate your learning experience. Take the first step towards academic success!"
            buttonText="Join as Student"
            buttonColor="bg-blue-500"
            borderColor="border-blue-500"
            role="student"
          />
          <InfoCard
            icon={FaUniversity}
            title="For Coaching Centers"
            description="Expand your reach by registering your coaching center. Connect with students and help them achieve their academic goals!"
            buttonText="Register Coaching Center"
            buttonColor="bg-green-500"
            borderColor="border-green-500"
            role="coaching"
          />
        </div>
      </div>

      <StatisticsSection />

      <TestimonialCarousel />

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8">Join Pathshala today and unlock your full potential!</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Home

