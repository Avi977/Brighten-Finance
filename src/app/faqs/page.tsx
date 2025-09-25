import { generatePageMetadata } from '@/lib/seo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = generatePageMetadata(
  'Frequently Asked Questions - Byton Finance',
  'Get answers to common questions about business loans, car loans, application process, rates, and terms at Byton Finance.',
  '/faqs'
)

const faqs = [
  {
    question: 'What types of loans do you offer?',
    answer: 'We offer business loans for equipment, working capital, expansion, and SBA loans. We also provide car loans for new and used vehicles.'
  },
  {
    question: 'How fast can I get approved?',
    answer: 'Most applications receive a decision within 24 hours. Once approved, funding can be available as soon as the next business day.'
  },
  {
    question: 'What are your interest rates?',
    answer: 'Business loan rates start from 6.99% APR and car loan rates start from 3.99% APR. Your actual rate depends on your credit profile and loan terms.'
  },
  {
    question: 'What credit score do I need?',
    answer: 'While we consider all credit profiles, generally a score of 650+ gives you the best rates and terms. We also consider other factors like income and business performance.'
  },
  {
    question: 'Are there any prepayment penalties?',
    answer: 'No, there are no prepayment penalties on any of our loans. You can pay off your loan early without any additional fees.'
  },
  {
    question: 'How much can I borrow?',
    answer: 'Business loans range from $5,000 to $5,000,000. Car loan amounts depend on the vehicle value and your creditworthiness.'
  }
]

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get answers to the most common questions about our lending services
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}