import { generatePageMetadata } from '@/lib/seo'
import MultiStepForm from '@/components/forms/MultiStepForm'

export const metadata = generatePageMetadata(
  'Apply for Loan - Brighten Finance',
  'Apply for business loans or car loans online. Fast approval process with competitive rates. Complete your secure application in just 5 minutes.',
  '/apply'
)

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <MultiStepForm />
    </div>
  )
}