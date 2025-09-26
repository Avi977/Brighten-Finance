import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Brighten Finance</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for business and car loans. Fast approvals, competitive rates, and excellent customer service.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business-loans" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link href="/car-loans" className="text-muted-foreground hover:text-foreground transition-colors">
                  Car Loans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-6 md:my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground space-y-2 sm:space-y-0">
          <p>&copy; 2024 Brighten Finance. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Licensed Lender | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer