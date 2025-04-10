import { AppSidebar } from "@/components/app-sidebar";
import ThemeSwitcher from "@/components/theme-switcher";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <SidebarTrigger className="-ml-1" />
            <ThemeSwitcher/>
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}