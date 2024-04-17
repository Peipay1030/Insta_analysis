import clsx from "clsx";
import SideNav from "../ui/dashboarsd/sidenav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx("flex h-full flex-row md:overflow-hidden")}>
      <SideNav />
      <div className="grow bg-gray-800 p-6 md:overflow-y-auto">{children}</div>
    </div>
  );
}