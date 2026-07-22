import { useEffect, useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { getMe } from "../../services/auth";



const TopNavbar = () => {

  const [user, setUser] = useState<any>(null);


useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await getMe();

      console.log(res);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser();
}, []);



  return (

    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-800">


      <div className="flex items-center justify-between px-6 py-4">


        {/* Left */}

        <div className="flex items-center gap-4">


          <label
            htmlFor="dashboard-drawer"
            className="btn btn-square btn-ghost lg:hidden"
          >

            <Menu size={22}/>

          </label>



          <div>

            <h1 className="text-2xl font-bold text-slate-200">
              Dashboard
            </h1>


            <p className="text-sm text-slate-400">
              Welcome back 👋
            </p>


          </div>


        </div>





        {/* Search */}


        <div className="hidden md:flex relative w-96">


          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />


          <input

            type="text"

            placeholder="Search applications..."

            className="input input-bordered bg-slate-800 border-slate-700 w-full pl-11 text-slate-200"

          />


        </div>





        {/* Right */}


        <div className="flex items-center gap-4">


          <button className="btn btn-circle btn-ghost text-slate-300">

            <Bell size={20}/>

          </button>





          <div className="dropdown dropdown-end">


            <label
              tabIndex={0}
              className="btn btn-ghost gap-3"
            >



              {/* Avatar */}

              <div className="avatar">

                <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">


                  {
                    user?.email
                    ? user.email.charAt(0).toUpperCase()
                    : "U"
                  }


                </div>


              </div>





              {/* User info */}


              <div className="hidden md:block text-left">


                <p className="font-semibold text-slate-200">

                  {
                    user?.email
                    ? user.email.split("@")[0]
                    : "User"
                  }


                </p>



                <p className="text-xs text-slate-400">

                  {
                    user?.email || "loading..."
                  }


                </p>


              </div>



            </label>





            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-900 border border-slate-800 rounded-box w-56 p-2 shadow-xl text-slate-200"
            >


              <li>
                <a>
                  Profile
                </a>
              </li>


              <li>
                <a>
                  Settings
                </a>
              </li>


              <li>
                <a className="text-red-400">
                  Logout
                </a>
              </li>


            </ul>



          </div>



        </div>



      </div>


    </header>

  );

};


export default TopNavbar;