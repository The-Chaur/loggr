import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
//   };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className=" min-h-screen min-w-full bg-slate-900 overflow-x-hidden  ">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
