import { generatePageMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = generatePageMetadata(
  'Contact Brighten Finance - Get Help With Your Loan',
  'Contact our expert loan specialists for personalized assistance with business loans, car loans, and financing options. Call, email, or visit us today.',
  '/contact'
)

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our expert loan specialists are here to help you find the perfect financing solution
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">1-800-BYTON-FIN</p>
              <p className="text-muted-foreground">Monday - Friday: 8am - 8pm EST</p>
              <p className="text-muted-foreground">Saturday: 9am - 5pm EST</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-600" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">info@bytonfinance.com</p>
              <p className="text-muted-foreground">We typically respond within 2 hours during business hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-600" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Brighten Finance Headquarters</p>
              <p className="text-muted-foreground">123 Financial District</p>
              <p className="text-muted-foreground">New York, NY 10004</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name *</label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email *</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message *</label>
              <Textarea id="message" placeholder="Tell us about your financing needs..." rows={4} />
            </div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}