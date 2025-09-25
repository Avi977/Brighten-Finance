import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Award, Shield, TrendingUp } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'About Byton Finance - Your Trusted Lending Partner',
  'Learn about Byton Finance, a trusted leader in business and auto financing. Discover our mission, values, and commitment to helping customers achieve their financial goals.',
  '/about'
)

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Since 2015
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Financial Success
              <span className="block text-blue-300">Is Our Mission</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-200">
              We&apos;ve helped over 10,000 businesses and individuals achieve their financial goals with transparent, fast, and reliable lending solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Byton Finance was founded with a simple mission: to make business and personal financing accessible, transparent, and fast. We understand that when you need funding, time is critical.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of financial experts combines decades of industry experience with cutting-edge technology to deliver lending solutions that work for modern businesses and individuals.
              </p>
              <Button asChild>
                <Link href="/apply">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">$500M+</h3>
                  <p className="text-muted-foreground">Loans Funded</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">9 Years</h3>
                  <p className="text-muted-foreground">In Business</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">A+</h3>
                  <p className="text-muted-foreground">BBB Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  No hidden fees, no surprises. We believe in honest, upfront communication about all loan terms and conditions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We know time is money. Our streamlined process gets you approved and funded faster than traditional lenders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every customer gets dedicated support from real people who understand your unique financial situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the Byton Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose Byton Finance for their lending needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/apply">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}