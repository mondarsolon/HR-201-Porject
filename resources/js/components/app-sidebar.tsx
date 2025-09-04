import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';
import ProfileCard, { Employee } from '@/components/profile-card';


const selectedEmployee: Employee = {
    name: "John Doe",
    avatar: "/JLC.webp",
    position: "Software Engineer",
    department: "IT",
    division: "Development",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    location: "Manila",
    dateHired: "2023-01-15",
    employeeNo: "EMP001",
};

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="p-4">
                <ProfileCard employee={selectedEmployee} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
