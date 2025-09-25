'use client'

import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { LoanApplicationData } from '@/lib/validations'

interface ReviewStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function ReviewStep({ form }: ReviewStepProps) {
  const { watch, setValue, formState: { errors } } = form
  const formData = watch()

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Review Your Application</h2>
        <p className="text-muted-foreground mt-2">
          Please review your information before submitting
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loan Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium">Loan Type:</span>
                <p className="text-sm text-muted-foreground capitalize">{formData.loanType}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Amount:</span>
                <p className="text-sm text-muted-foreground">
                  ${formData.loanAmount?.toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium">Purpose:</span>
              <p className="text-sm text-muted-foreground">{formData.loanPurpose}</p>
            </div>
          </CardContent>
        </Card>

        {formData.loanType === 'business' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium">Business Name:</span>
                  <p className="text-sm text-muted-foreground">{formData.businessName}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Business Type:</span>
                  <p className="text-sm text-muted-foreground capitalize">
                    {formData.businessType?.replace('_', ' ')}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium">Years in Business:</span>
                  <p className="text-sm text-muted-foreground">{formData.yearsInBusiness}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Annual Revenue:</span>
                  <p className="text-sm text-muted-foreground">
                    ${formData.annualRevenue?.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {formData.loanType === 'car' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vehicle Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium">Condition:</span>
                  <p className="text-sm text-muted-foreground capitalize">{formData.vehicleType}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Year:</span>
                  <p className="text-sm text-muted-foreground">{formData.vehicleYear}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Make:</span>
                  <p className="text-sm text-muted-foreground">{formData.vehicleMake}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Model:</span>
                  <p className="text-sm text-muted-foreground">{formData.vehicleModel}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium">Name:</span>
                <p className="text-sm text-muted-foreground">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium">Email:</span>
                <p className="text-sm text-muted-foreground">{formData.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Phone:</span>
                <p className="text-sm text-muted-foreground">{formData.phone}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Employment:</span>
                <p className="text-sm text-muted-foreground capitalize">
                  {formData.employmentStatus?.replace('-', ' ')}
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium">Address:</span>
              <p className="text-sm text-muted-foreground">
                {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium">Annual Income:</span>
              <p className="text-sm text-muted-foreground">
                ${formData.annualIncome?.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Terms and Conditions</CardTitle>
            <CardDescription>
              Please read and accept the following terms to proceed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the Terms and Conditions
                </label>
                <p className="text-xs text-muted-foreground">
                  By checking this box, you agree to our terms of service and loan agreement.
                </p>
              </div>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>
            )}

            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToCredit"
                checked={formData.agreeToCredit}
                onCheckedChange={(checked) => setValue('agreeToCredit', checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="agreeToCredit"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I authorize a credit check
                </label>
                <p className="text-xs text-muted-foreground">
                  We will perform a soft credit check that won&apos;t affect your credit score.
                </p>
              </div>
            </div>
            {errors.agreeToCredit && (
              <p className="text-sm text-destructive">{errors.agreeToCredit.message}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}