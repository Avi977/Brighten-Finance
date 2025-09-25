import { generatePageMetadata } from '@/lib/seo'
import { EnhancedHomePage } from './enhanced-home'

export const metadata = generatePageMetadata(
  'Professional Business & Car Loans - Fast & Reliable Financing | Byton Finance',
  'Get approved quickly with competitive rates. Professional financing solutions for business growth and vehicle purchases with trusted service.',
  '/'
)

export default function HomePage() {
  return <EnhancedHomePage />
}