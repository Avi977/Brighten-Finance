import { NextRequest, NextResponse } from 'next/server'
import { loanApplicationSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = loanApplicationSchema.parse(body)

    // Generate a reference number
    const referenceNumber = `BF${Date.now()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Trigger workflow processes
    // 4. Integrate with credit check services

    // For now, we'll simulate a successful submission
    console.log('Loan application received:', {
      referenceNumber,
      loanType: validatedData.loanType,
      loanAmount: validatedData.loanAmount,
      applicantName: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message: 'Application submitted successfully',
        estimatedReviewTime: '24 hours'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Application submission error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid application data',
          errors: error.issues
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}