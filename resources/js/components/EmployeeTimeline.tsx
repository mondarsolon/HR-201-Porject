

"use client"

import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Joined Company",
    description: "Started as Product Manager",
    date: "January 15, 1990",
  },
  {
    title: "Onboarding Completed",
    description: "All required documents submitted and processed",
    date: "January 20, 2005",
  },
  {
    title: "Annual Performance Review",
    description: "Exceeded expectations in all areas",
    date: "December 15, 2010",
  },
  {
    title: "Promotion",
    description: "Promoted to Senior Product Manager",
    date: "March 1, 2015",
  },
  {
    title: "Annual Performance Review",
    description: "Exceeded expectations in all areas",
    date: "December 15, 2020",
  },
]

export default function EmployeeTimeline() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Employee Journey Timeline</h2>
      <p className="text-gray-600 mb-6">A chronological history of the employee’s journey</p>

      <div className="relative border-l-2 border-dashed border-gray-300 ml-3">
        {events.map((event, i) => (
          <div key={i} className="mb-8 ml-6">
            {/* Red dot */}
            <span className="absolute -left-2.5 h-4 w-4 rounded-full bg-red-500 border border-white"></span>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <p className="text-gray-500 text-xs mt-1">{event.date}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
