import { useEffect, useState } from "react";
import { User, Mail } from "lucide-react";
import { toast } from "sonner";
import { axiosInstance } from "../../utils/axios";
import { getMe } from "../../services/auth";



const Profile = () => {

  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchProfile = async()=>{

      try{

        const res = await getMe();

        setUser(res.data);


      }catch(error){

        toast.error(
          "Failed to load profile"
        );

      }finally{

        setLoading(false);

      }

    };


    fetchProfile();


  },[]);





  if(loading){

    return (

      <div className="flex justify-center py-20">

        <span className="loading loading-spinner loading-lg"></span>

      </div>

    );

  }





  return (

    <div className="max-w-4xl mx-auto space-y-6">


      <div>

        <h1 className="text-3xl font-bold text-slate-200">
          My Profile
        </h1>


        <p className="text-slate-400 mt-2">
          Manage your account information
        </p>


      </div>






      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">


        <div className="flex items-center gap-5 mb-8">


          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold">

            {
              user?.email
              ?.charAt(0)
              .toUpperCase()
            }

          </div>



          <div>

            <h2 className="text-2xl font-semibold text-slate-200">

              {
                user?.email?.split("@")[0]
              }

            </h2>


            <p className="text-slate-400">
              CareerTrack User
            </p>


          </div>


        </div>





        <div className="space-y-5">



          <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">


            <User
              className="text-slate-400"
              size={22}
            />


            <div>

              <p className="text-sm text-slate-400">
                User ID
              </p>


              <p className="text-slate-200">
                {user?.id}
              </p>

            </div>


          </div>






          <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">


            <Mail
              className="text-slate-400"
              size={22}
            />


            <div>

              <p className="text-sm text-slate-400">
                Email
              </p>


              <p className="text-slate-200">
                {user?.email}
              </p>


            </div>


          </div>



        </div>



      </div>



    </div>

  );

};


export default Profile;