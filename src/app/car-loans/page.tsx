import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Car, DollarSign, Clock } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'Premium Car Loans - Luxury Vehicle Financing | Byton Finance',
  'Exclusive automotive financing for luxury vehicles. Mercedes, BMW, Audi financing with rates from 2.99% APR. Up to $2M for exotic cars with white-glove service.',
  '/car-loans'
)

export default function CarLoansPage() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-amber-400/20 to-yellow-300/20 border-amber-400/30 text-amber-200 px-6 py-2 text-lg backdrop-blur-sm">
              <Car className="w-5 h-5 mr-2" />
              Luxury Automotive Financing
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
                Exclusive Financing for
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                Exceptional Vehicles
              </span>
            </h1>

            <div className="mb-12 space-y-4">
              <p className="text-2xl lg:text-3xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Mercedes • BMW • Audi • Porsche • Tesla
              </p>
              <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
                Premium financing from 2.99% APR • Up to $2,000,000 • White-glove concierge service
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/apply">
                  Get Pre-Qualified <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium"
              >
                <Link href="/contact">
                  Speak to Specialist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">3.99% APR</h3>
                <p className="text-muted-foreground">Starting rates</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">84 Months</h3>
                <p className="text-muted-foreground">Flexible terms</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pre-Approval</h3>
                <p className="text-muted-foreground">Know your budget</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">We Finance All Types of Vehicles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>New Vehicles</CardTitle>
                <CardDescription>Latest models with manufacturer warranties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Rates from 3.99% APR</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 84 month terms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>No prepayment penalties</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Used Vehicles</CardTitle>
                <CardDescription>Quality pre-owned cars, trucks, and SUVs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Competitive used car rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Vehicles up to 10 years old</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Fast approval process</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Get pre-approved and shop with confidence at any dealership.
          </p>
          <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/apply">
              Get Pre-Approved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}