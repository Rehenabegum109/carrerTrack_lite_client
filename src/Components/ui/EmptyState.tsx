import { Link } from "react-router-dom";
import { BriefcaseBusiness, Plus } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900 py-20 px-6 text-center">

      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
        <BriefcaseBusiness size={36} className="text-primary" />
      </div>

      <h2 className="text-2xl font-bold text-slate-200">
        No Applications Found
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        You haven't added any job applications yet. Start tracking your job applications by creating your first one.
      </p>

      <Link
        to="/applications/new"
        className="btn btn-primary mt-8 gap-2"
      >
        <Plus size={18} />
        Add Application
      </Link>

    </div>
  );
};

export default EmptyState;