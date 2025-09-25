import { generatePageMetadata } from '@/lib/seo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = generatePageMetadata(
  'Terms & Conditions, Privacy Policy - Byton Finance',
  'Read our terms and conditions, privacy policy, and legal information. Learn about our lending practices, data protection, and customer rights.',
  '/legal'
)

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Legal Information</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Important legal terms and policies that govern our services
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3>1. Acceptance of Terms</h3>
            <p>By using Byton Finance services, you agree to these terms and conditions.</p>
            
            <h3>2. Loan Application Process</h3>
            <p>All loan applications are subject to credit approval and verification of information provided.</p>
            
            <h3>3. Interest Rates and Fees</h3>
            <p>Interest rates are determined based on creditworthiness, loan amount, and term. All fees are disclosed upfront.</p>
            
            <h3>4. Repayment Terms</h3>
            <p>Monthly payments are due on the same date each month. Late payments may incur additional fees.</p>
            
            <h3>5. Early Repayment</h3>
            <p>Borrowers may repay loans early without penalty fees.</p>
          </CardContent>
        </Card>
        
        <Card id="privacy">
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3>Information We Collect</h3>
            <p>We collect information necessary to process loan applications and provide our services, including:</p>
            <ul>
              <li>Personal identification information</li>
              <li>Financial information</li>
              <li>Employment information</li>
              <li>Credit information</li>
            </ul>
            
            <h3>How We Use Information</h3>
            <p>Your information is used to:</p>
            <ul>
              <li>Process loan applications</li>
              <li>Verify identity and creditworthiness</li>
              <li>Communicate about your loan</li>
              <li>Comply with legal requirements</li>
            </ul>
            
            <h3>Information Sharing</h3>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul>
              <li>Credit bureaus for reporting purposes</li>
              <li>Service providers who assist in loan processing</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>Byton Finance is a licensed lender operating under applicable state and federal regulations.</p>
            
            <h3>Equal Credit Opportunity</h3>
            <p>We are committed to fair lending practices and do not discriminate based on race, color, religion, national origin, sex, marital status, age, or other protected characteristics.</p>
            
            <h3>Complaints and Concerns</h3>
            <p>If you have concerns about our services, please contact us at compliance@bytonfinance.com or 1-800-BYTON-FIN.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}