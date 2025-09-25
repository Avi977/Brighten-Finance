'use client'

import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { LoanApplicationData } from '@/lib/validations'
import { Building, Car } from 'lucide-react'

interface LoanTypeStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function LoanTypeStep({ form }: LoanTypeStepProps) {
  const { register, watch, setValue, formState: { errors } } = form
  const loanType = watch('loanType')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">What type of loan do you need?</h2>
        <p className="text-muted-foreground mt-2">
          Select the option that best describes your financing needs
        </p>
      </div>

      <RadioGroup
        value={loanType}
        onValueChange={(value) => setValue('loanType', value as 'business' | 'car')}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <RadioGroupItem value="business" id="business" className="peer sr-only" />
          <Label
            htmlFor="business"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <Building className="mb-4 h-12 w-12" />
            <div className="text-center">
              <div className="text-lg font-semibold">Business Loan</div>
              <div className="text-sm text-muted-foreground mt-2">
                Financing for business growth, equipment, working capital, or expansion
              </div>
            </div>
          </Label>
        </div>

        <div>
          <RadioGroupItem value="car" id="car" className="peer sr-only" />
          <Label
            htmlFor="car"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <Car className="mb-4 h-12 w-12" />
            <div className="text-center">
              <div className="text-lg font-semibold">Car Loan</div>
              <div className="text-sm text-muted-foreground mt-2">
                Financing for new or used vehicles with competitive rates
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>

      {errors.loanType && (
        <p className="text-sm text-destructive text-center">{errors.loanType.message}</p>
      )}
    </div>
  )
}