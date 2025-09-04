"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Briefcase, Clock } from "lucide-react"

export interface CompactToggleProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
  disabled?: boolean
}

const CompactToggle = React.forwardRef<HTMLButtonElement, CompactToggleProps>(
  ({ className, checked = false, onCheckedChange, disabled = false, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked)
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center rounded-md border border-gray-200 bg-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2disabled:cursor-not-allowed disabled:opacity-50",
          "hover:shadow-md",
          className,
        )}
        {...props}
      >
        {/* Permanent (Briefcase) */}
        <div
          className={cn(
            "flex items-center justify-center px-3 py-2 rounded-l-md transition-all duration-200",
            checked ? "bg-white text-gray-600" : "bg-black text-white shadow-sm",
          )}
        >
          <Briefcase className="w-4 h-4" />
        </div>

        {/* Temporary (Clock) */}
        <div
          className={cn(
            "flex items-center justify-center px-3 py-2 rounded-r-md transition-all duration-200",
            checked ? "bg-black text-white shadow-sm" : "bg-white text-gray-600",
          )}
        >
          <Clock className="w-4 h-4" />
        </div>
      </button>
    )
  },
)
export interface CompactToggleProps {
  id?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
  disabled?: boolean
}

CompactToggle.displayName = "CompactToggle"

// ✅ Example usage inside your CardHeader
export default function Compacts () {
  const [assignmentType, setAssignmentType] = React.useState<"permanent" | "temporary">("permanent")

  return (
    <CardHeader className="flex flex-row items-center justify-between">

      <div className="flex items-center space-x-2">
        <Label htmlFor="assignment-switch" className="text-sm font-medium">
          {assignmentType === "permanent" ? "Permanent" : "Temporary"}
        </Label>

        <CompactToggle
          id="assignment-switch"
          checked={assignmentType === "temporary"}
          onCheckedChange={(checked) => setAssignmentType(checked ? "temporary" : "permanent")}
        />
      </div>
    </CardHeader>
  )
}
