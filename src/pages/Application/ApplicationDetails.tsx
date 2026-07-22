import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { getSingleApplication } from "../../services/application";


const ApplicationDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [application, setApplication] = useState<any>(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchApplication = async () => {

      try {

        const res = await getSingleApplication(id!);

        setApplication(res.data);

      } catch(error:any) {

        toast.error(
          "Failed to load application"
        );

      } finally {

        setLoading(false);

      }

    };


    fetchApplication();


  }, [id]);





  if(loading){

    return (

      <div className="flex justify-center py-20">

        <span className="loading loading-spinner loading-lg"></span>

      </div>

    );

  }





  if(!application){

    return (

      <div className="text-center py-20">

        <p className="text-slate-400">
          Application not found
        </p>

      </div>

    );

  }




  return (

    <div className="max-w-4xl mx-auto space-y-6">


      {/* Header */}

      <div className="flex items-center gap-4">


        <button
          onClick={()=>navigate(-1)}
          className="btn btn-ghost"
        >

          <ArrowLeft size={18}/>

        </button>



        <div>

          <h1 className="text-3xl font-bold text-slate-200">

            Application Details

          </h1>


          <p className="text-slate-400">

            View complete application information

          </p>


        </div>


      </div>





      {/* Card */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">


        <div className="grid md:grid-cols-2 gap-6">



          <div>

            <p className="text-slate-400 text-sm">
              Company
            </p>

            <h3 className="text-lg text-slate-200 font-semibold">
              {application.company}
            </h3>

          </div>





          <div>

            <p className="text-slate-400 text-sm">
              Position
            </p>

            <h3 className="text-lg text-slate-200 font-semibold">
              {application.position}
            </h3>

          </div>





          <div>

            <p className="text-slate-400 text-sm">
              Location
            </p>

            <h3 className="text-lg text-slate-200 font-semibold">
              {application.location || "--"}
            </h3>

          </div>





          <div>

            <p className="text-slate-400 text-sm">
              Job Type
            </p>

            <h3 className="text-lg text-slate-200 font-semibold">
              {application.jobType}
            </h3>

          </div>





          <div>

            <p className="text-slate-400 text-sm">
              Salary
            </p>

            <h3 className="text-lg text-slate-200 font-semibold">
              {application.salary || "--"}
            </h3>

          </div>





          <div>

            <p className="text-slate-400 text-sm">
              Status
            </p>

            <span className="badge badge-primary mt-2">
              {application.status}
            </span>

          </div>




        </div>





        <div className="mt-6">


          <p className="text-slate-400 text-sm">
            Notes
          </p>


          <p className="mt-2 text-slate-200 bg-slate-800 rounded-xl p-4">

            {application.notes || "No notes available"}

          </p>


        </div>




      </div>


    </div>

  );

};


export default ApplicationDetails;