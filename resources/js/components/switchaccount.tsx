import { ChevronDown, Moon } from "lucide-react";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface User {
  name: string;
  position: string;
  avatar?: string;
}

interface SwitchProps {
  currentUser: User;
  availableUsers: User[];
  setCurrentUser: (user: User) => void;
}

const mockUsers: User[] = [
  { name: "John Doe", position: "Software Engineer", avatar: "" },
  { name: "Jane Smith", position: "HR Manager", avatar: "" },
  { name: "Mark Lee", position: "UI/UX Designer", avatar: "" },
];

export const Switch = ({ currentUser, availableUsers, setCurrentUser }: SwitchProps) => {
  return (
    <div className="flex items-center gap-2  absolute top-4 right-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-2 rounded-lg border-1 px-3 py-2 h-10 transition-colors hover:bg-gray-200">
            <Avatar className="h-6 w-6">
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-xs">
                {currentUser.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">{currentUser.name}</div>
              <div className="text-xs text-gray-600">{currentUser.position}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          {availableUsers.map((user, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => setCurrentUser(user)}
              className="flex cursor-pointer items-center gap-3 p-3"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-xs">
                  {user.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.position}</div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" size="sm" className="flex items-center justify-center">
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
};

// 🔹 Overview Page
export default function Overview() {
  const [availableUsers] = useState<User[]>(mockUsers);
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);

  return (
    <div className="flex items-center justify-between">
      <Switch
        currentUser={currentUser}
        availableUsers={availableUsers}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}