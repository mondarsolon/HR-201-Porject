'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Building } from "lucide-react"

const events = [
    {
        title: 'Jollibee Foods Corporation',
        description: 'IT Specialist',
        date: 'January 15, 1990 - December 15, 1994',
    },
    {
        title: 'Alfamart Indonesia',
        description: 'IT Support',
        date: 'January 20, 2000 - December 20, 2004',
    },
];

export default function EducationTabs() {
    return (
        <div className="p-6">
            <h2 className="mb-2 text-xl font-bold">Work Experience </h2>
            <p className="mb-6 text-gray-600">A chronological history of John's employment journey</p>

            <div className="relative ml-3 border-l-2 border-dashed border-gray-300">
                {events.map((event, i) => (
                    <div key={i} className="relative mb-8 ml-6">
                        {/* Red dot */}
                        <span className="absolute -left-[2rem] h-4 w-4 rounded-full border border-white bg-red-500"></span>

                        <Card>
                            <CardContent className="flex items-start gap-3 p-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                                    <Building  className="h-5 w-5 text-black-500" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">{event.title}</h3>
                                    <p className="text-sm text-gray-600">{event.description}</p>
                                    <p className="mt-1 text-xs text-gray-500">{event.date}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
