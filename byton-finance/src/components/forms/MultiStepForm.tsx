'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { LoanApplicationData, loanApplicationSchema } from '@/lib/validations'
import LoanTypeStep from './steps/LoanTypeStep'
import LoanDetailsStep from './steps/LoanDetailsStep'
import BusinessDetailsStep from './steps/BusinessDetailsStep'
import VehicleDetailsStep from './steps/VehicleDetailsStep'
import PersonalDetailsStep from './steps/PersonalDetailsStep'
import ReviewStep from './steps/ReviewStep'
import SuccessStep from './steps/SuccessStep'

const STEPS = [
  { id: 1, title: 'Loan Type', description: 'Choose your loan type' },
  { id: 2, title: 'Loan Details', description: 'Amount and purpose' },
  { id: 3, title: 'Specific Details', description: 'Business or vehicle info' },
  { id: 4, title: 'Personal Information', description: 'Your details' },
  { id: 5, title: 'Review', description: 'Confirm your application' },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')

  const form = useForm<LoanApplicationData>({
    resolver: zodResolver(loanApplicationSchema),
    mode: 'onChange',
    defaultValues: {
      loanType: undefined,
      loanAmount: undefined,
      loanPurpose: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      employmentStatus: undefined,
      annualIncome: undefined,
      agreeToTerms: false,
      agreeToCredit: false,
    },
  })

  const { watch, trigger, formState: { errors } } = form
  const loanType = watch('loanType')

  const nextStep = async () => {
    let fieldsToValidate: (keyof LoanApplicationData)[] = []

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['loanType']
        break
      case 2:
        fieldsToValidate = ['loanAmount', 'loanPurpose']
        break
      case 3:
        if (loanType === 'business') {
          fieldsToValidate = ['businessName', 'businessType', 'yearsInBusiness', 'annualRevenue']
        } else if (loanType === 'car') {
          fieldsToValidate = ['vehicleType', 'vehicleMake', 'vehicleModel', 'vehicleYear']
        }
        break
      case 4:
        fieldsToValidate = [
          'firstName', 'lastName', 'email', 'phone',
          'address', 'city', 'state', 'zipCode',
          'employmentStatus', 'annualIncome'
        ]
        break
    }

    const isStepValid = await trigger(fieldsToValidate)

    if (isStepValid) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onSubmit = async (data: LoanApplicationData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Application submission failed')
      }

      const result = await response.json()
      setReferenceNumber(result.referenceNumber)
      setIsComplete(true)
    } catch (error) {
      console.error('Submission error:', error)
      // Handle error - you might want to show a toast or error message
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return <SuccessStep referenceNumber={referenceNumber} />
  }

  const progress = (currentStep / STEPS.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Loan Application</CardTitle>
          <CardDescription>
            Complete your application in {STEPS.length} easy steps
          </CardDescription>
          <div className="mt-4">
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between mt-2">
              {STEPS.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <Badge
                    variant={currentStep >= step.id ? 'default' : 'secondary'}
                    className="mb-1"
                  >
                    {step.id}
                  </Badge>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 1 && <LoanTypeStep form={form} />}
            {currentStep === 2 && <LoanDetailsStep form={form} />}
            {currentStep === 3 && loanType === 'business' && <BusinessDetailsStep form={form} />}
            {currentStep === 3 && loanType === 'car' && <VehicleDetailsStep form={form} />}
            {currentStep === 4 && <PersonalDetailsStep form={form} />}
            {currentStep === 5 && <ReviewStep form={form} />}

            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}

              {currentStep < STEPS.length ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}