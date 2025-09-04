'use client';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import EmployeeFileTabs from '@/components/Employeefiletabs';
import Banking from '@/components/banking';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "John Doe's File",
    href: "/employee/bank",
  },
];

export default function Bank() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Education - John Doe's File" />
      <EmployeeFileTabs />
      <div className="p-6">
        <Banking />
      </div>
    </AppLayout>
  );
}
