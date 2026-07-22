

import {
  LayoutDashboard,
  BriefcaseBusiness,
  PlusCircle,
  User,
  LogOut,
  Home,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logoutUser } from "../../services/auth";

const Sidebar = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await logoutUser();

    toast.success("Logout successful");

    navigate("/login");
  } catch (error) {
    toast.error("Logout failed");
  }
};
  const menus = [
    {
    name: "Home",
    icon: Home,
    path: "/",
  },
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Applications",
      icon: BriefcaseBusiness,
      path: "/applications",
    },
    {
      name: "Add Application",
      icon: PlusCircle,
      path: "/applications/new",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="dashboard-drawer"
        className="drawer-overlay"
      ></label>

      <aside className="w-72 min-h-full bg-slate-900 border-r border-slate-800 text-white">

        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-primary">
            CareerTrack
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Job Application Tracker
          </p>
        </div>

        <ul className="menu p-4 space-y-2">

          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl py-3 ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}

        </ul>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">

          <button
  onClick={handleLogout}
  className="btn btn-error w-full"
>
  <LogOut size={18} />
  Logout
</button>

        </div>

      </aside>
    </div>
  );
};

export default Sidebar;