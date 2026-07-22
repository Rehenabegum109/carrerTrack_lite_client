import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { deleteApplication } from "../../services/application";


const DeleteApplication = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const handleDelete = async()=>{

    try{

      await deleteApplication(id!);

      toast.success(
        "Application deleted successfully"
      );

      navigate("/applications");


    }catch(error){

      toast.error(
        "Delete failed"
      );

    }

  };


  return (

    <div className="max-w-md mx-auto mt-20 bg-slate-900 border border-slate-800 rounded-2xl p-8">


      <h1 className="text-2xl font-bold text-slate-200">
        Delete Application
      </h1>


      <p className="text-slate-400 mt-3">
        Are you sure you want to delete this application?
      </p>


      <div className="flex gap-3 mt-6">


        <button
          onClick={()=>navigate(-1)}
          className="btn bg-slate-700 text-slate-200"
        >
          Cancel
        </button>


        <button
          onClick={handleDelete}
          className="btn btn-error"
        >
          Delete
        </button>


      </div>


    </div>

  );

};


export default DeleteApplication;