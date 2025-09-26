'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Copy, Download } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface SuccessStepProps {
  referenceNumber: string
}

export default function SuccessStep({ referenceNumber }: SuccessStepProps) {
  const [copied, setCopied] = useState(false)

  const copyReferenceNumber = async () => {
    try {
      await navigator.clipboard.writeText(referenceNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-700">Application Submitted Successfully!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for choosing Brighten Finance. Your loan application has been received and is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Your Reference Number</p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-lg font-bold text-primary">{referenceNumber}</code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyReferenceNumber}
                  className="h-8 w-8 p-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 mt-2">Copied to clipboard!</p>
              )}
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-lg font-semibold">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Immediate Review</p>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your application within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Document Verification</p>
                    <p className="text-sm text-muted-foreground">
                      We may contact you for additional documentation if needed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Loan Decision</p>
                    <p className="text-sm text-muted-foreground">
                      You&apos;ll receive a decision within 2-3 business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Funding</p>
                    <p className="text-sm text-muted-foreground">
                      Upon approval, funds can be available as soon as next business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-left">
              <h4 className="font-medium text-blue-900 mb-2">Important Reminders:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Keep your reference number for future communication</li>
                <li>• Check your email regularly for updates</li>
                <li>• Our team may call you from (555) 123-4567</li>
                <li>• Have your documentation ready if requested</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Confirmation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}