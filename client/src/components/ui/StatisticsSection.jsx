"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stats = [
  { value: 5000, label: "Students Enrolled" },
  { value: 200, label: "Expert Instructors" },
  { value: 50, label: "Subjects Covered" },
  { value: 95, label: "Success Rate" },
]

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = Math.ceil(end / (duration / 16))

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return <span ref={ref}>{count}</span>
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.value} />
                {stat.label.includes("Rate") && "%"}
              </div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

