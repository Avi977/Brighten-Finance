import { z } from 'zod'

export const loanApplicationSchema = z.object({
  // Step 1: Loan Type
  loanType: z.enum(['business', 'car']),

  // Step 2: Loan Amount
  loanAmount: z.number().min(5000).max(5000000),
  loanPurpose: z.string().min(10),

  // Step 3: Business Details (conditional)
  businessName: z.string().optional(),
  businessType: z.string().optional(),
  yearsInBusiness: z.number().optional(),
  annualRevenue: z.number().optional(),

  // Step 3: Vehicle Details (conditional)
  vehicleType: z.enum(['new', 'used']).optional(),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.number().optional(),

  // Step 4: Personal Details
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),

  // Address
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/),

  // Financial Information
  employmentStatus: z.enum(['employed', 'self-employed', 'unemployed', 'retired']),
  annualIncome: z.number().min(20000),
  creditScore: z.enum(['excellent', 'good', 'fair', 'poor']).optional(),

  // Terms and Conditions
  agreeToTerms: z.boolean().refine(val => val === true),
  agreeToCredit: z.boolean().refine(val => val === true),
})

export type LoanApplicationData = z.infer<typeof loanApplicationSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).optional(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

export type ContactFormData = z.infer<typeof contactFormSchema>