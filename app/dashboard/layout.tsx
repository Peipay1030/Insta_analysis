// 'use client'

import SideNav from "../ui/dashboarsd/sidenav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-row md:overflow-hidden">
      <div className="md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto bg-gray-800">{children}</div>
    </div>
  );
}