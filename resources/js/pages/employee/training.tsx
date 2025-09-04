'use client';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import EmployeeFileTabs from '@/components/Employeefiletabs';
import Fitness from '@/components/fitness';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "John Doe's File",
    href: "/employee/training",
  },
];

export default function Training() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Education - John Doe's File" />
      <EmployeeFileTabs />
      <div className="p-6">
        <Fitness/>
      </div>
    </AppLayout>
  );
}
