import Topbar from "@/components/app/Topbar";
import Sidebar from "@/components/app/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-white md:block">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <Topbar />
          <main className="flex flex-1 flex-col px-4 bg-zinc-100">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
