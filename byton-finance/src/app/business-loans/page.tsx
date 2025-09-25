import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, TrendingUp, Building, DollarSign, Clock } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'Business Loans - Competitive Rates & Fast Approval',
  'Get business loans up to $5M with rates from 6.99% APR. Fast approval for equipment, working capital, and expansion financing.',
  '/business-loans'
)

export default function BusinessLoansPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              <Building className="w-4 h-4 mr-2" />
              Business Financing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Business Loans That
              <span className="block text-yellow-300">Grow With You</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              From $5,000 to $5,000,000 with competitive rates starting at 6.99% APR
            </p>
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/apply">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Up to $5M</h3>
                <p className="text-muted-foreground">Flexible funding amounts</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">6.99% APR</h3>
                <p className="text-muted-foreground">Competitive rates</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24 Hours</h3>
                <p className="text-muted-foreground">Fast approval</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Loan Types We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Equipment Financing', desc: 'Purchase or lease business equipment' },
              { title: 'Working Capital', desc: 'Manage cash flow and operations' },
              { title: 'Business Expansion', desc: 'Grow your business to new markets' },
              { title: 'Real Estate', desc: 'Commercial property purchases' },
              { title: 'Inventory Financing', desc: 'Stock up for peak seasons' },
              { title: 'SBA Loans', desc: 'Government-backed financing options' }
            ].map((loan, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {loan.title}
                  </CardTitle>
                  <CardDescription>{loan.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get the funding you need with competitive rates and fast approval.
          </p>
          <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/apply">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}