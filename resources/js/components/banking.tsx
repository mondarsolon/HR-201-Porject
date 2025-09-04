'use client'

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { CreditCard } from "lucide-react"
import { Badge } from "./ui/badge"
import { useState } from "react"
import React from "react"

export default function Banking() {
const [selectedStarIndex, setSelectedStarIndex] = useState<number | null>(null)
  const bankAccounts = [
    {
      bankName: 'Bank of America',
      accountNumber: '**** **** **** 1234',
      accountType: 'Checking',
      routingNumber: '123456789',
      currency: 'USD',
    },
    {
      bankName: 'Chase Bank',
      accountNumber: '**** **** **** 5678',
      accountType: 'Savings',
      routingNumber: '987654321',
      currency: 'USD',
    },
    {
      bankName: 'Wells Fargo',
      accountNumber: '**** **** **** 9012',
      accountType: 'Checking',
      routingNumber: '456123789',
      currency: 'USD',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {bankAccounts.map((account, index) => (
        <Card key={index} className="relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold">{account.bankName}</h3>
              </div>
                <button
                onClick={() => setSelectedStarIndex(index)}
                className={`p-1 rounded transition-colors ${
                  selectedStarIndex === index
                    ? "text-red-400"
                    : "text-gray-400 hover:text-red-300"
                }`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Account Type</span>
                <span className="font-medium">{account.accountType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Account Number</span>
                <span className="font-mono font-medium">{account.accountNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Routing Number</span>
                <span className="font-mono font-medium">{account.routingNumber}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <Badge className="bg-red-500 text-white hover:bg-red-600">Active</Badge>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
