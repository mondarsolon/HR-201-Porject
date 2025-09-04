'use client';

import { useState } from 'react';
import EmployeeFileTabs from '@/components/Employeefiletabs';
import OverviewTabs from '@/components/Overviewtabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChevronDown, Moon } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "John Doe's File",
    href: '/employee/education',
  },
];



export default function Overview() {
 
 return (
  <AppLayout breadcrumbs={breadcrumbs}>
  

    <EmployeeFileTabs />
    <div className="p-6">
      <OverviewTabs />
    </div>
  </AppLayout>
);
}
