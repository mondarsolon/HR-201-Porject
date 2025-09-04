'use client';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import EmployeeFileTabs from '@/components/Employeefiletabs';
import EducationTabs from '@/components/Expi';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "John Doe's File",
    href: "/employee/education",
  },
];

export default function Experience() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Education - John Doe's File" />
      <EmployeeFileTabs />
      <div className="p-6">
        <EducationTabs />
      </div>
    </AppLayout>
  );
}
