'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { useState } from 'react'
import { Menu, X, Building, Car, Phone, CreditCard } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Byton Finance
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-10 flex-1">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 rounded-lg transition-colors">
                  Loans
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 no-underline outline-none focus:shadow-lg transition-shadow border border-blue-100"
                          href="/apply"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div className="mb-2 mt-4 text-lg font-semibold text-slate-800">
                            Apply Now
                          </div>
                          <p className="text-sm leading-tight text-slate-600">
                            Get started with your loan application today. Fast, secure, and simple process.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/business-loans" className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-200">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                              <Building className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-sm font-semibold leading-none text-slate-800">Business Loans</div>
                          </div>
                          <p className="text-sm leading-snug text-slate-600">
                            Fuel your business growth with flexible financing solutions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/car-loans" className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-200">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <Car className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-sm font-semibold leading-none text-slate-800">Car Loans</div>
                          </div>
                          <p className="text-sm leading-snug text-slate-600">
                            Finance your dream vehicle with competitive rates
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 focus:outline-none">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/faqs" className="inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 focus:outline-none">
                    FAQs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 focus:outline-none">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50" asChild>
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden ml-auto"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Loans</div>
                <Link
                  href="/business-loans"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">Business Loans</div>
                    <div className="text-xs text-slate-600">Funding for growth</div>
                  </div>
                </Link>
                <Link
                  href="/car-loans"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Car className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">Car Loans</div>
                    <div className="text-xs text-slate-600">Vehicle financing</div>
                  </div>
                </Link>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="space-y-2">
                  <Link href="/about" className="block p-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/faqs" className="block p-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                    FAQs
                  </Link>
                  <Link href="/contact" className="block p-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-3">
                <Button variant="outline" className="w-full border-slate-300 text-slate-700" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" asChild>
                  <Link href="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header