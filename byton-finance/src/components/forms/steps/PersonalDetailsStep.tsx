'use client'

import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LoanApplicationData } from '@/lib/validations'

interface PersonalDetailsStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function PersonalDetailsStep({ form }: PersonalDetailsStepProps) {
  const { register, setValue, watch, formState: { errors } } = form
  const employmentStatus = watch('employmentStatus')
  const creditScore = watch('creditScore')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p className="text-muted-foreground mt-2">
          We need some basic information to process your application
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="firstName"
              placeholder="John"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="lastName"
              placeholder="Doe"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="text-sm text-destructive">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              {...register('phone')}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">
            Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="address"
            placeholder="123 Main St"
            {...register('address')}
          />
          {errors.address && (
            <p className="text-sm text-destructive">{errors.address.message}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium">
              City <span className="text-destructive">*</span>
            </label>
            <Input
              id="city"
              placeholder="New York"
              {...register('city')}
            />
            {errors.city && (
              <p className="text-sm text-destructive">{errors.city.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="state" className="text-sm font-medium">
              State <span className="text-destructive">*</span>
            </label>
            <Input
              id="state"
              placeholder="NY"
              {...register('state')}
            />
            {errors.state && (
              <p className="text-sm text-destructive">{errors.state.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="zipCode" className="text-sm font-medium">
              ZIP Code <span className="text-destructive">*</span>
            </label>
            <Input
              id="zipCode"
              placeholder="10001"
              {...register('zipCode')}
            />
            {errors.zipCode && (
              <p className="text-sm text-destructive">{errors.zipCode.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Employment Status <span className="text-destructive">*</span>
            </label>
            <Select value={employmentStatus} onValueChange={(value) => setValue('employmentStatus', value as 'employed' | 'self-employed' | 'unemployed' | 'retired')}>
              <SelectTrigger>
                <SelectValue placeholder="Select employment status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="self-employed">Self-Employed</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
              </SelectContent>
            </Select>
            {errors.employmentStatus && (
              <p className="text-sm text-destructive">{errors.employmentStatus.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="annualIncome" className="text-sm font-medium">
              Annual Income <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                id="annualIncome"
                type="number"
                placeholder="50,000"
                className="pl-8"
                {...register('annualIncome', { valueAsNumber: true })}
              />
            </div>
            {errors.annualIncome && (
              <p className="text-sm text-destructive">{errors.annualIncome.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Credit Score (Optional)
          </label>
          <Select value={creditScore} onValueChange={(value) => setValue('creditScore', value as 'excellent' | 'good' | 'fair' | 'poor')}>
            <SelectTrigger>
              <SelectValue placeholder="Select your credit score range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent (750+)</SelectItem>
              <SelectItem value="good">Good (700-749)</SelectItem>
              <SelectItem value="fair">Fair (650-699)</SelectItem>
              <SelectItem value="poor">Poor (Below 650)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}