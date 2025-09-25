'use client'

import { useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  value: string
  label: string
  icon: React.ElementType
  duration?: number
}

export function AnimatedCounter({ value, label, icon: Icon, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2 }
      })

      // Extract numeric part for animation
      const numericValue = value.match(/\d+/)
      if (numericValue) {
        const targetNum = parseInt(numericValue[0])
        let currentNum = 0
        const increment = targetNum / (duration * 60) // 60fps

        const timer = setInterval(() => {
          currentNum += increment
          if (currentNum >= targetNum) {
            currentNum = targetNum
            clearInterval(timer)
          }

          // Preserve original formatting
          const formattedValue = value.replace(/\d+/, Math.floor(currentNum).toString())
          setDisplayValue(formattedValue)
        }, 1000 / 60)

        return () => clearInterval(timer)
      } else {
        setDisplayValue(value)
      }
    }
  }, [isInView, controls, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="text-white text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-blue-400 mb-1"
        animate={{ scale: isInView ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {displayValue}
      </motion.div>
      <div className="text-sm text-slate-300">{label}</div>
    </motion.div>
  )
}