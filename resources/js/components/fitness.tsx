"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Search } from "lucide-react"

// TypeScript interfaces
interface TrainingRecord {
  course: string
  provider: string
  category: string
  completedDate: string
  expiryDate?: string
  expiryNote?: string
  status: "Active" | "Archived"
}

interface Employee {
  training: TrainingRecord[]
}

interface FitnessProps {
  selectedEmployee?: Employee
}

// Default sample data
const defaultEmployee: Employee = {
  training: [
    {
      course: "React Basics",
      provider: "Udemy",
      category: "Frontend",
      completedDate: "2025-08-01",
      expiryDate: "2026-08-01",
      expiryNote: "Renewal required",
      status: "Active",
    },
    {
      course: "Node.js Advanced",
      provider: "Coursera",
      category: "Backend",
      completedDate: "2025-07-15",
      status: "Archived",
    },
  ],
}

export const Fitness: React.FC<FitnessProps> = ({ selectedEmployee = defaultEmployee }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Training Records</CardTitle>
        <p className="text-sm text-gray-600">Complete history of training and certifications</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-10" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              All Categories
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-4 py-2 text-sm font-medium text-gray-500 border-b border-gray-200">
            <div>Training</div>
            <div>Category</div>
            <div>Completion Date</div>
            <div>Status</div>
          </div>

          {/* Training Records */}
          <div className="space-y-2">
            {selectedEmployee.training.map((training: TrainingRecord, index: number) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <div className="font-medium">{training.course}</div>
                  <div className="text-sm text-gray-500">{training.provider}</div>
                </div>
                <div className="text-sm text-gray-600">{training.category}</div>
                <div>
                  <div className="text-sm text-gray-600">{training.completedDate}</div>
                  {training.expiryDate && (
                    <div className="text-xs text-gray-500">Expires {training.expiryDate}</div>
                  )}
                  {training.expiryNote && <div className="text-xs text-gray-500">{training.expiryNote}</div>}
                </div>
                <div>
                  <Badge
                    className={`${
                      training.status === "Archived" ? "bg-gray-500" : "bg-red-500"
                    } text-white hover:bg-red-600`}
                  >
                    {training.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Fitness
