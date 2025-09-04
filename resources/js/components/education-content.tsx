'use client';

import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const events = [
    {
        title: 'Harvard University',
        description: 'Bachelors in Computer Science',
        date: 'January 15, 1990 - December 15, 1994',
    },
    {
        title: 'Jack Roberto University',
        description: 'Bachelors in Anti Silos',
        date: 'January 20, 2000 - December 20, 2004',
    },
];

export default function EducationTabs() {
    return (
        <div className="p-6">
            <h2 className="mb-2 text-xl font-bold">Educational Background</h2>
            <p className="mb-6 text-gray-600">A chronological history of the educational journey</p>

            <div className="relative ml-3 border-l-2 border-dashed border-gray-300">
                {events.map((event, i) => (
                    <div key={i} className="relative mb-8 ml-6">
                        {/* Red dot */}
                        <span className="absolute -left-[2rem] h-4 w-4 rounded-full border border-white bg-red-500"></span>

                        <Card>
                            <CardContent className="flex items-start gap-3 p-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                                    <GraduationCap className="h-5 w-5 text-black-500" />
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
