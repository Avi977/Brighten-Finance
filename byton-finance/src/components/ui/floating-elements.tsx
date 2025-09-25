'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Shield, Zap } from 'lucide-react'

export function FloatingElements() {
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }

  const elements = [
    { icon: DollarSign, className: "top-1/4 left-10 text-green-400/30", delay: 0 },
    { icon: TrendingUp, className: "top-1/3 right-16 text-blue-400/30", delay: 1 },
    { icon: Shield, className: "top-2/3 left-16 text-purple-400/30", delay: 2 },
    { icon: Zap, className: "top-1/2 right-10 text-yellow-400/30", delay: 3 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-12 md:w-16 h-12 md:h-16 ${element.className} opacity-60 md:opacity-100`}
          animate={floatingAnimation}
          style={{
            animationDelay: `${element.delay}s`
          }}
        >
          <element.icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  )
}

export function FloatingOrbs() {
  const orbAnimation = {
    x: [0, 30, -30, 0],
    y: [0, -40, 40, 0],
    scale: [1, 1.2, 0.8, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-br from-blue-500/10 md:from-blue-500/20 to-cyan-500/10 md:to-cyan-500/20 blur-xl"
        animate={orbAnimation}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-20 md:w-24 h-20 md:h-24 rounded-full bg-gradient-to-br from-purple-500/10 md:from-purple-500/20 to-pink-500/10 md:to-pink-500/20 blur-xl"
        animate={orbAnimation}
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-green-500/10 md:from-green-500/20 to-emerald-500/10 md:to-emerald-500/20 blur-xl"
        animate={orbAnimation}
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}