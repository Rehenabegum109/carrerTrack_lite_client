

import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/ui/TopNavbar";
import Sidebar from "../Components/ui/Sidebar";


const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950">

      <div className="drawer lg:drawer-open">

        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content flex flex-col">

          <TopNavbar />

          <main className="flex-1 p-6">
            <Outlet />
          </main>

        </div>

        <Sidebar />

      </div>

    </div>
  );
};

export default DashboardLayout;

