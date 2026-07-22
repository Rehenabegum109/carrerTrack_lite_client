import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Building2 } from "lucide-react";

import { toast } from "sonner";
import { getApplications } from "../../services/application";

const ViewApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState<any>(null);

  useEffect(() => {
    const loadApplication = async () => {
      try {
        const res = await getApplications(id!);
        setApplication(res.data);
      } catch (err: any) {
        toast.error(
          err.response?.data?.message || "Application not found"
        );
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="text-center py-20">
        Application not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost mb-6"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="bg-base-200 rounded-2xl p-8 shadow">

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
            <Building2 className="text-white" size={30} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {application.company}
            </h1>

            <p className="opacity-70">
              {application.position}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <InfoCard
            title="Company"
            value={application.company}
          />

          <InfoCard
            title="Position"
            value={application.position}
          />

          <InfoCard
            title="Status"
            value={application.status}
          />

          <InfoCard
            title="Job Type"
            value={application.jobType}
          />

          <InfoCard
            title="Location"
            value={application.location}
          />

          <InfoCard
            title="Salary"
            value={application.salary || "--"}
          />

        </div>

        <div className="mt-8">

          <h3 className="font-semibold mb-3">
            Notes
          </h3>

          <div className="bg-base-100 rounded-xl p-5">
            {application.notes || "No notes available"}
          </div>

        </div>

      </div>

    </div>
  );
};

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-base-100 rounded-xl p-5">

      <p className="text-sm opacity-60">
        {title}
      </p>

      <h3 className="font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}

export default ViewApplication;