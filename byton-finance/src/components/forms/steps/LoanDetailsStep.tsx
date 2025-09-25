'use client'

import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoanApplicationData } from '@/lib/validations'

interface LoanDetailsStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function LoanDetailsStep({ form }: LoanDetailsStepProps) {
  const { register, formState: { errors } } = form

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Loan Details</h2>
        <p className="text-muted-foreground mt-2">
          Tell us about the amount you need and how you plan to use it
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <label htmlFor="loanAmount" className="text-sm font-medium">
            Loan Amount <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <Input
              id="loanAmount"
              type="number"
              placeholder="50,000"
              className="pl-8"
              {...register('loanAmount', { valueAsNumber: true })}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Minimum: $5,000 | Maximum: $5,000,000
          </p>
          {errors.loanAmount && (
            <p className="text-sm text-destructive">{errors.loanAmount.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="loanPurpose" className="text-sm font-medium">
            How will you use this loan? <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="loanPurpose"
            placeholder="Please describe in detail how you plan to use the funds..."
            className="min-h-[100px]"
            {...register('loanPurpose')}
          />
          <p className="text-xs text-muted-foreground">
            Be specific about your intended use of funds (minimum 10 characters)
          </p>
          {errors.loanPurpose && (
            <p className="text-sm text-destructive">{errors.loanPurpose.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}