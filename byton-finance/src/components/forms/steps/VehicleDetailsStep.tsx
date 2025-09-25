'use client'

import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { LoanApplicationData } from '@/lib/validations'

interface VehicleDetailsStepProps {
  form: UseFormReturn<LoanApplicationData>
}

export default function VehicleDetailsStep({ form }: VehicleDetailsStepProps) {
  const { register, setValue, watch, formState: { errors } } = form
  const vehicleType = watch('vehicleType')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Vehicle Information</h2>
        <p className="text-muted-foreground mt-2">
          Tell us about the vehicle you want to finance
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">
            Vehicle Condition <span className="text-destructive">*</span>
          </label>
          <RadioGroup
            value={vehicleType}
            onValueChange={(value) => setValue('vehicleType', value as 'new' | 'used')}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="new" />
              <Label htmlFor="new">New Vehicle</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="used" id="used" />
              <Label htmlFor="used">Used Vehicle</Label>
            </div>
          </RadioGroup>
          {errors.vehicleType && (
            <p className="text-sm text-destructive">{errors.vehicleType.message}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="vehicleMake" className="text-sm font-medium">
              Vehicle Make <span className="text-destructive">*</span>
            </label>
            <Input
              id="vehicleMake"
              placeholder="Toyota"
              {...register('vehicleMake')}
            />
            {errors.vehicleMake && (
              <p className="text-sm text-destructive">{errors.vehicleMake.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="vehicleModel" className="text-sm font-medium">
              Vehicle Model <span className="text-destructive">*</span>
            </label>
            <Input
              id="vehicleModel"
              placeholder="Camry"
              {...register('vehicleModel')}
            />
            {errors.vehicleModel && (
              <p className="text-sm text-destructive">{errors.vehicleModel.message}</p>
            )}
          </div>

          <div className="space-y-2 md:col-span-1">
            <label htmlFor="vehicleYear" className="text-sm font-medium">
              Year <span className="text-destructive">*</span>
            </label>
            <Input
              id="vehicleYear"
              type="number"
              placeholder="2024"
              min="1990"
              max="2025"
              {...register('vehicleYear', { valueAsNumber: true })}
            />
            {errors.vehicleYear && (
              <p className="text-sm text-destructive">{errors.vehicleYear.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}