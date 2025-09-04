'use client';

    import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
    import AppLayout from '@/layouts/app-layout';
    import { type BreadcrumbItem } from '@/types';
    import { Head } from '@inertiajs/react';
    import EmployeeFileTabs  from '@/components/Employeefiletabs';

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'John Doe\'s File',
            href: '/employee/overview',
        },
    ];

    export default function Dashboard() {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="John Doe's File" /> 
                <EmployeeFileTabs/>
            </AppLayout>
        );
    }
