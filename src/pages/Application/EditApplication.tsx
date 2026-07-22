import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import {
  getSingleApplication,
  updateApplication,
} from "../../services/application";

const EditApplication = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    jobType: "Remote",
    salary: "",
    status: "APPLIED",
    notes: "",
  });



  useEffect(() => {

    const loadApplication = async()=>{

      try{

        const res = await getSingleApplication(id!);

        const data = res.data;


        setFormData({

          company: data.company,
          position: data.position,
          location: data.location,
          jobType: data.jobType,
          salary: data.salary,
          status: data.status,
          notes: data.notes,

        });


      }catch(error){

        toast.error(
          "Failed to load application"
        );

      }

    };


    loadApplication();


  },[id]);





  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  )=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };





  const handleSubmit = async(
    e:React.FormEvent
  )=>{

    e.preventDefault();


    try{

      setLoading(true);


      await updateApplication(
        id!,
        formData
      );


      toast.success(
        "Application updated"
      );


      navigate("/applications");


    }catch(error){

      toast.error(
        "Update failed"
      );

    }finally{

      setLoading(false);

    }

  };





  return (

    <div className="max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-slate-200 mb-6">
        Edit Application
      </h1>


      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-8 grid md:grid-cols-2 gap-6"
      >


        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company name"
          className="input input-bordered"
        />


        <input
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Job position"
          className="input input-bordered"
        />


        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="input input-bordered"
        />


        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="select select-bordered"
        >
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>



        <input
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="input input-bordered"
        />



        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="select select-bordered"
        >

          <option value="APPLIED">
            Applied
          </option>

          <option value="REVIEWING">
            Reviewing
          </option>

          <option value="INTERVIEW">
            Interview
          </option>

          <option value="OFFER">
            Offer
          </option>

          <option value="REJECTED">
            Rejected
          </option>

        </select>



        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
          className="textarea textarea-bordered md:col-span-2"
        />



        <button
          disabled={loading}
          className="btn btn-primary md:col-span-2"
        >

          {
            loading
            ? "Updating..."
            : "Update Application"
          }

        </button>


      </form>


    </div>

  );

};


export default EditApplication;