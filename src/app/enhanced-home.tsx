'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { FloatingElements, FloatingOrbs } from '@/components/ui/floating-elements'
import { ArrowRight, CheckCircle, Shield, TrendingUp, Users, Zap, Star, DollarSign, Clock, Phone, Building, Car } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export function EnhancedHomePage() {
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const loanTypesRef = useRef(null)

  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.1 })
  const loanTypesInView = useInView(loanTypesRef, { once: true, amount: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-end md:items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <FloatingOrbs />
        <FloatingElements />

        {/* Background Image with Professional Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Desktop Image */}
          <Image
            src="/images/mercedes hero.jpg"
            alt="Professional business and car financing solutions"
            fill
            className="hidden md:block object-cover object-center"
            priority
            quality={100}
          />
          {/* Mobile Image - positioned to show car better */}
          <Image
            src="/images/mercedes hero.jpg"
            alt="Professional business and car financing solutions"
            fill
            className="md:hidden object-cover object-[80%_center]"
            priority
            quality={100}
          />
          {/* Mobile Gradient - Minimal overlay to show car clearly */}
          <motion.div
            className="md:hidden absolute inset-0 bg-gradient-to-r from-red-950/75 via-red-900/30 to-transparent"
            animate={{
              background: [
                "linear-gradient(to right, rgb(69 10 10 / 0.75), rgb(127 29 29 / 0.30), transparent)",
                "linear-gradient(to right, rgb(69 10 10 / 0.70), rgb(127 29 29 / 0.25), transparent)",
                "linear-gradient(to right, rgb(69 10 10 / 0.75), rgb(127 29 29 / 0.30), transparent)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          {/* Desktop Gradient */}
          <motion.div
            className="hidden md:block absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/80 to-red-950/40"
            animate={{
              background: [
                "linear-gradient(to right, rgb(69 10 10 / 0.95), rgb(127 29 29 / 0.80), rgb(69 10 10 / 0.40))",
                "linear-gradient(to right, rgb(69 10 10 / 0.92), rgb(127 29 29 / 0.85), rgb(69 10 10 / 0.45))",
                "linear-gradient(to right, rgb(69 10 10 / 0.95), rgb(127 29 29 / 0.80), rgb(69 10 10 / 0.40))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/30 to-transparent md:from-red-950/85 md:via-transparent md:to-red-950/30"></div>
        </motion.div>

        {/* Professional Content Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-0 h-full flex items-center justify-center pt-20 md:pt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              className="text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Badge className="mb-6 bg-blue-500/20 border-blue-400/30 text-blue-100 px-4 py-2 text-sm backdrop-blur-sm">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="w-4 h-4 mr-2" />
                  </motion.div>
                  Trusted Financial Partner
                </Badge>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Fast & Reliable
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Business & Car Loans
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                Get approved quickly with competitive rates. Whether you&apos;re growing your business
                or buying your dream car, we make financing simple and stress-free.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-xl transition-all duration-300"
                  >
                    <Link href="/apply">
                      Apply Now
                      <motion.div
                        className="inline-block ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium"
                    asChild
                  >
                    <Link href="/contact">
                      Check Rates
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                {[
                  "No prepayment penalties",
                  "Quick approval in 24hrs",
                  "Competitive rates"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Stats - Inline with content */}
              <motion.div
                className="lg:hidden mt-6 grid grid-cols-2 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4 border border-white/20">
                  <div className="text-lg font-bold text-orange-400">$50M+</div>
                  <div className="text-xs text-slate-300">Loans Funded</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4 border border-white/20">
                  <div className="text-lg font-bold text-orange-400">24hrs</div>
                  <div className="text-xs text-slate-300">Avg. Approval</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Card - Hidden on mobile to save space */}
            <motion.div
              className="hidden lg:flex justify-end order-1 lg:order-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-white">Trusted by Thousands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: "$50M+", label: "Loans Funded", delay: 1.2 },
                        { value: "24hrs", label: "Avg. Approval", delay: 1.4 },
                        { value: "4.9★", label: "Customer Rating", delay: 1.6 },
                        { value: "98%", label: "Satisfaction", delay: 1.8 }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className={`text-3xl font-bold mb-1 ${index < 2 ? 'text-orange-400' : 'text-amber-400'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: stat.delay }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-slate-300">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Loan Types Section */}
      <motion.section
        ref={loanTypesRef}
        className="py-20 bg-slate-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: loanTypesInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: loanTypesInView ? 1 : 0, y: loanTypesInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Choose Your Loan Type</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re expanding your business or purchasing a vehicle,
              we have the right financing solution for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            {/* Enhanced Business Loans Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: loanTypesInView ? 1 : 0, x: loanTypesInView ? 0 : -100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="relative p-8 pt-12 bg-white border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-visible">
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 text-sm font-semibold shadow-xl border-2 border-white">
                    Most Popular
                  </Badge>
                </div>

                <div className="text-center mb-6 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Building className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Business Loans</h3>
                  <p className="text-slate-600">Fuel your business growth with flexible financing solutions</p>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                  {[
                    "Up to $500,000",
                    "Terms from 6 to 60 months",
                    "Rates starting at 5.99%",
                    "No collateral required"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: loanTypesInView ? 1 : 0, x: loanTypesInView ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700" size="lg" asChild>
                      <Link href="/business-loans">Apply for Business Loan</Link>
                    </Button>
                  </motion.div>
                  <Button variant="outline" className="w-full hover:bg-slate-50" asChild>
                    <Link href="/business-loans">Learn More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Enhanced Auto Loans Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: loanTypesInView ? 1 : 0, x: loanTypesInView ? 0 : 100 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="relative p-8 bg-white border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-amber-50/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="text-center mb-6 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Car className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Auto Loans</h3>
                  <p className="text-slate-600">Drive away with competitive rates on new and used vehicles</p>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                  {[
                    "Up to $150,000",
                    "Terms up to 84 months",
                    "Rates starting at 3.49%",
                    "New & used vehicles"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: loanTypesInView ? 1 : 0, x: loanTypesInView ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700" size="lg" asChild>
                      <Link href="/car-loans">Apply for Auto Loan</Link>
                    </Button>
                  </motion.div>
                  <Button variant="outline" className="w-full hover:bg-slate-50" asChild>
                    <Link href="/car-loans">Learn More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: benefitsInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Why Choose Byton Finance?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personal service to make financing simple and accessible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Approval",
                description: "Get decisions in as little as 24 hours with our streamlined process.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: TrendingUp,
                title: "Competitive Rates",
                description: "Access the best rates in the market tailored to your credit profile.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Secure & Safe",
                description: "Bank-level security ensures your information is always protected.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated loan specialists guide you through every step.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: benefitsInView ? 1 : 0,
                  y: benefitsInView ? 0 : 50
                }}
                transition={{
                  duration: 0.6,
                  delay: benefitsInView ? index * 0.1 + 0.4 : 0
                }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className={`bg-gradient-to-br ${benefit.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Stats Section with Animated Counters */}
      <section className="py-16 bg-slate-800 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
          animate={{
            background: [
              "linear-gradient(to right, rgb(30 41 59), rgb(51 65 85), rgb(30 41 59))",
              "linear-gradient(to right, rgb(51 65 85), rgb(30 41 59), rgb(51 65 85))",
              "linear-gradient(to right, rgb(30 41 59), rgb(51 65 85), rgb(30 41 59))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2.99%", label: "Starting APR", icon: DollarSign },
              { value: "24", label: "Quick Approval", icon: Clock },
              { value: "4.9", label: "Customer Rating", icon: Star },
              { value: "24/7", label: "Support Available", icon: Phone }
            ].map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                duration={2 + index * 0.5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundImage: [
                'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                'radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
                'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)'
              ]
            }}
            style={{ backgroundSize: '50px 50px' }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who have achieved their financial goals with Brighten Finance.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl"
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-medium"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}