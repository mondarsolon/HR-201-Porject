// components/ProfileCard.tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail, MapPin, Phone, UserCheck } from 'lucide-react';

export interface Employee {
    name: string;
    avatar?: string;
    position: string;
    department: string;
    division: string;
    email: string;
    phone: string;
    location: string;
    dateHired: string;
    employeeNo: string;
}

interface ProfileCardProps {
    employee: Employee;
        
}

export default function ProfileCard({ employee }: ProfileCardProps) {
    return (
        <Card className="mx-auto w-full max-w-lg overflow-hidden">
            <CardContent className="p-0">
                {/* Profile Header with Photo */}
                <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 p-6">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-yellow-400"></div>
                            <Avatar className="relative z-10 h-20 w-20 border-4 border-yellow-400">
                                <AvatarImage src={employee.avatar || '/storage/JLC.webp'} alt={employee.name} />
                                <AvatarFallback className="text-xl">
                                    {employee?.name
                                        ? employee.name
                                              .split(' ')
                                              .map((n) => n[0]?.toUpperCase())
                                              .join('')
                                        : '?'}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>

                {/* Employee Details */}
                <div className="space-y-1 p-4 text-center">
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
                        <p className="text-gray-600">{employee.position}</p>
                        <p className="text-sm text-gray-500">
                            {employee.department} - {employee.division}
                        </p>
                        <Badge className="mt-2 bg-red-500 text-white hover:bg-red-600">Active</Badge>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">{employee.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">{employee.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">{employee.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">Date Hired: {employee.dateHired}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <UserCheck className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-700">Employee No: {employee.employeeNo}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
