
import { Link, usePage } from "@inertiajs/react"
import { User, GraduationCap, Briefcase, Banknote, Settings2, Clock, Dumbbell, Building2 } from "lucide-react"

const navItems = [
  { href: route("employee.overview"), label: "Overview", icon: <User className="mb-1 h-5 w-5" /> },
  { href: route("employee.education"), label: "Education", icon: <GraduationCap className="mb-1 h-5 w-5" /> },
  { href: route("employee.experience"), label: "Experience", icon: <Briefcase className="mb-1 h-5 w-5" /> },
  { href: route("employee.bank"), label: "Bank Accounts", icon: <Banknote className="mb-1 h-5 w-5" /> },
  { href: route("employee.training"), label: "Training", icon: <Dumbbell className="mb-1 h-5 w-5" /> },
  { href: route("employee.timeline"), label: "Timeline", icon: <Clock className="mb-1 h-5 w-5" /> },
]

export default function EmployeeFileTabs() {
  const { url } = usePage()

  return (
    <div className="mx-auto mt-8 w-[96%]">
      <div className="flex w-full overflow-x-auto border-b bg-gray-100 sm:justify-between sm:space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center p-3 transition ${
              url.startsWith(item.href) ? "text-blue-600 border-b-2 border-blue-600" : "hover:bg-gray-200"
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
