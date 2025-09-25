'use client'

import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LoanApplicationData } from '@/lib/validations'

interface BusinessDetailsStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function BusinessDetailsStep({ form }: BusinessDetailsStepProps) {
  const { register, setValue, watch, formState: { errors } } = form
  const businessType = watch('businessType')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Business Information</h2>
        <p className="text-muted-foreground mt-2">
          Tell us about your business
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="businessName" className="text-sm font-medium">
            Business Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="businessName"
            placeholder="ABC Company LLC"
            {...register('businessName')}
          />
          {errors.businessName && (
            <p className="text-sm text-destructive">{errors.businessName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Business Type <span className="text-destructive">*</span>
          </label>
          <Select value={businessType} onValueChange={(value) => setValue('businessType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="llc">LLC</SelectItem>
              <SelectItem value="corporation">Corporation</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
              <SelectItem value="nonprofit">Non-Profit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.businessType && (
            <p className="text-sm text-destructive">{errors.businessType.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="yearsInBusiness" className="text-sm font-medium">
            Years in Business <span className="text-destructive">*</span>
          </label>
          <Input
            id="yearsInBusiness"
            type="number"
            placeholder="5"
            min="0"
            max="100"
            {...register('yearsInBusiness', { valueAsNumber: true })}
          />
          {errors.yearsInBusiness && (
            <p className="text-sm text-destructive">{errors.yearsInBusiness.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="annualRevenue" className="text-sm font-medium">
            Annual Revenue <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <Input
              id="annualRevenue"
              type="number"
              placeholder="100,000"
              className="pl-8"
              {...register('annualRevenue', { valueAsNumber: true })}
            />
          </div>
          {errors.annualRevenue && (
            <p className="text-sm text-destructive">{errors.annualRevenue.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}