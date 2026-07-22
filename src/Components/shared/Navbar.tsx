// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   BriefcaseBusiness,
//   CheckCircle2,
//   Menu,
//   X,
// } from "lucide-react";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Applications", path: "/applications" },
//   { name: "Dashboard", path: "/dashboard" },
//   { name: "About", path: "/about" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-xl">
//       <div className="navbar mx-auto max-w-7xl px-5">

//         {/* Logo */}
//         <div className="navbar-start">
//           <Link
//             to="/"
//             className="flex items-center gap-3 transition hover:scale-105"
//           >
//             <div className="relative">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
//                 <BriefcaseBusiness size={24} />
//               </div>

//               <CheckCircle2
//                 size={16}
//                 className="absolute -right-1 -top-1 rounded-full bg-white text-emerald-500"
//               />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//                   CareerTrack
//                 </span>
//               </h1>

//               <p className="-mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">
//                 Lite
//               </p>
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal gap-3 px-1">
//             {navLinks.map((item) => (
//               <li key={item.path}>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "font-semibold text-emerald-600"
//                       : "font-medium hover:text-emerald-600"
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Buttons */}
//         <div className="navbar-end hidden gap-3 lg:flex">
//           <Link to="/login" className="btn btn-ghost text-emerald-600">
//             Login
//           </Link>

//           <Link
//             to="/register"
//             className="btn border-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile */}
//         <div className="navbar-end lg:hidden">
//           <button
//             onClick={() => setOpen(!open)}
//             className="btn btn-ghost btn-circle"
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="border-t border-base-300 bg-base-100 lg:hidden">
//           <ul className="menu p-4">
//             {navLinks.map((item) => (
//               <li key={item.path}>
//                 <NavLink
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}

//             <div className="mt-4 flex flex-col gap-3">
//               <Link
//                 to="/login"
//                 className="btn btn-outline btn-success"
//                 onClick={() => setOpen(false)}
//               >
//                 Login
//               </Link>

//               <Link
//                 to="/register"
//                 className="btn btn-success"
//                 onClick={() => setOpen(false)}
//               >
//                 Register
//               </Link>
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { getMe, logoutUser } from "../../services/auth";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Applications", path: "/applications" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();

       
        setUser(res.data);

        ;
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();

      setUser(null);

      toast.success("Logout Successful");

      navigate("/login");
    } catch {
      toast.error("Logout Failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-xl">
      <div className="navbar mx-auto max-w-7xl px-5">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                <BriefcaseBusiness size={24} />
              </div>

              <CheckCircle2
                size={16}
                className="absolute -right-1 -top-1 rounded-full bg-white text-emerald-500"
              />
            </div>

            <div>
              <h1 className="text-2xl font-black">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  CareerTrack
                </span>
              </h1>

              <p className="text-xs text-gray-500 uppercase">
                Lite
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-emerald-600"
                      : "font-medium hover:text-emerald-600"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end hidden lg:flex gap-3">
          {user ? (
            <>
              <Link to="/profile" className="btn btn-ghost">
                {user.name || user.email}
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-ghost text-emerald-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-base-300 bg-base-100 lg:hidden">
          <ul className="menu p-4">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="btn btn-outline"
                    onClick={() => setOpen(false)}
                  >
                    {user.name || user.email}
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="btn btn-error text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn btn-outline btn-success"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="btn btn-success"
                    onClick={() => setOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;