'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';
import { Building, User, Users } from 'lucide-react';
import React, { useState } from 'react';
import Compacts from './compacttoggle';

interface EmployeeCardProps {
    title: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ title, actions, children }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{title}</CardTitle>
                {actions && <div className="flex gap-2">{actions}</div>}
            </CardHeader>
            <CardContent className="space-y-4">{children}</CardContent>
        </Card>
    );
};

interface Employee {
    personalInfo: Record<string, string>;
    employmentDetails: Record<string, string>;
    governmentIds: Record<string, string>;
    medicalInfo: { clinic: string; date: string; class: string }[];
    education: { degree: string; institution: string; year: string; gpa: string }[];
}

interface OverviewTabsProps {
    selectedEmployee?: Employee;
}

const familyMembers = [
    {
        id: 1,
        name: 'John Doe',
        relationship: 'Father',
        nationality: 'Filipino',
        birthdate: '1970-03-22',
        isDependent: true,
    },
    {
        id: 2,
        name: 'Mary Doe',
        relationship: 'Mother',
        nationality: 'Filipino',
        birthdate: '1972-11-10',
        isDependent: true,
    },
    {
        id: 3,
        name: 'David Doe',
        relationship: 'Brother',
        nationality: 'Filipino',
        birthdate: '1995-07-04',
        isDependent: false,
    },
    {
        id: 4,
        name: 'Samantha Doe',
        relationship: 'Sister',
        nationality: 'Filipino',
        birthdate: '1998-01-25',
        isDependent: false,
    },
];
// Mock data for demonstration
const mockEmployee: Employee = {
    personalInfo: {
        firstName: 'John',
        middleName: 'Michael',
        lastName: 'Doe',
        dateOfBirth: '1792-05-15',
        gender: 'Male',
        maritalStatus: 'Single',
        emergencyContact: 'Jane Doe',
        emergencyPhone: '+1234567890',
    },
    employmentDetails: {
        division: 'Technology',
        department: 'Engineering',
        section: 'Software Development',
        manager: 'Sarah Johnson',
        employmentType: 'Full-time',
        startDate: '2023-01-15',
        workLocation: 'Main Office',
    },
    governmentIds: {
        SSS: '123-45-6789',
        TIN: '987-654-321',
        PhilHealth: '111-222-333',
        'Pag-IBIG': '444-555-666',
    },
    medicalInfo: [
        {
            clinic: 'City Medical Center',
            date: '2023-12-01',
            class: 'A1',
        },
        {
            clinic: 'Health Plus Clinic',
            date: '2024-01-15',
            class: 'A',
        },
    ],
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Technology',
            year: '2022',
            gpa: '3.8',
        },
        {
            degree: 'Master of Science in Software Engineering',
            institution: 'Tech Institute',
            year: '2024',
            gpa: '3.9',
        },
    ],
};

export default function OverviewTabs({ selectedEmployee = mockEmployee }: OverviewTabsProps) {
    const [assignmentType, setAssignmentType] = useState<'permanent' | 'temporary'>('permanent');
    return (
        <div className="max-w-10xl mx-auto mt-8 w-full">
            {/* Overview Tab */}
            <div>
                <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">Personal Information</CardTitle>
                                <Button variant="ghost" size="sm" className="text-red-500">
                                    <Users className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">First Name:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.firstName}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Middle Name:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.middleName}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Last Name:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.lastName}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Date of Birth:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.dateOfBirth}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Gender:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.gender}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Marital Status:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.maritalStatus}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Emergency Contact:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.emergencyContact}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Emergency Phone:</label>
                                    <p className="font-medium">{selectedEmployee.personalInfo.emergencyPhone}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">Employment Details</CardTitle>

                                <div className="flex items-center space-x-2">
                                    <Compacts />
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Division:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.division}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Department:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.department}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Section:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.section}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Manager:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.manager}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Employment Type:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.employmentType}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Start Date:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.startDate}</p>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-gray-500">Work Location:</label>
                                    <p className="font-medium">{selectedEmployee.employmentDetails.workLocation}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <EmployeeCard
                        title="Government Identifications"
                        actions={
                            <Button variant="ghost" size="sm" className="text-red-500">
                                <Building className="h-4 w-4" />
                            </Button>
                        }
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {Object.entries(selectedEmployee.governmentIds).map(([key, value], index) => {
                                const gradients = [
                                    'from-blue-200 to-blue-200/0',
                                    'from-red-200 to-red-200/0',
                                    'from-green-200 to-green-2L00/0',
                                    'from-yellow-200 to-yellow-200/0',
                                ];

                                // Cycle gradient colors
                                const gradientClass = gradients[index % gradients.length];

                                return (
                                    <div key={key} className={`flex items-center justify-between bg-gradient-to-l ${gradientClass} rounded-lg p-4`}>
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${
                                                gradientClass.includes('blue')
                                                    ? 'bg-blue-300'
                                                    : gradientClass.includes('red')
                                                      ? 'bg-red-300'
                                                      : gradientClass.includes('green')
                                                        ? 'bg-green-300'
                                                        : 'bg-yellow-300'
                                            }`}
                                        >
                                            {key[0].toUpperCase()}
                                        </div>
                                        <div className="flex items-center justify-between w-full ml-4">
                                            <div className=" font-bold ">{key}</div>
                                            <div className="font-semibold">{value}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </EmployeeCard>

                    <EmployeeCard
                        title="Medical Information"
                        actions={
                            <Button variant="ghost" size="sm" className="text-red-500 ">
                                <Building className="h-4 w-4" />
                            </Button>
                        }
                    >
                        {selectedEmployee.medicalInfo.map((medical, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg dark:bg-black bg-gray-50 p-4">
                                <div>
                                    <div className="font-medium">{medical.clinic}</div>
                                    <div className="text-sm text-gray-500">{medical.date}</div>
                                </div>
                                <Badge variant="outline">{medical.class}</Badge>
                            </div>
                        ))}
                    </EmployeeCard>
                    <EmployeeCard  title="Family Information">
                        <Table className='justify-between'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold">Name</TableHead>
                                    <TableHead className="font-semibold">Nationality</TableHead>
                                    <TableHead className="font-semibold">Birthdate</TableHead>
                                    <TableHead className="font-semibold">Is a Dependent?</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {familyMembers.map((member) => (
                                    <TableRow key={member.id}>
                                        <TableCell className='flex items-center gap-3'>
                                            <div className="flex items-center gap-3 justify-center">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                                                    <User className="h-4 w-4 text-gray-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{member.name}</div>
                                                    <div className="text-sm text-gray-500">{member.relationship}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600">{member.nationality}</TableCell>
                                        <TableCell className="text-gray-600">{member.birthdate}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={member.isDependent ? 'default' : 'secondary'}
                                                className={member.isDependent ? 'bg-red-500 hover:bg-red-600' : ''}
                                            >
                                                {member.isDependent ? 'Yes' : 'No'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </EmployeeCard>
                </div>
            </div>
        </div>
    );
}
