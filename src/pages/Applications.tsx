
import { useEffect, useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { getApplications } from "../services/application";

import ApplicationTable from "./Application/ApplicationTable";
import EmptyState from "../Components/ui/EmptyState";

const Applications = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const loadApplications = async () => {
    try {
      setLoading(true);

      const res = await getApplications();

      setApplications(res.data);
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          "Failed to load applications"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const filteredApplications = useMemo(() => {
    return applications.filter((item) => {
      const matchesSearch =
        item.company
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.position
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, status]);

  return (
    <div className="space-y-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Applications
          </h1>

          <p className="text-base-content/70">
            Manage your job applications.
          </p>
        </div>

        <Link
          to="/applications/new"
          className="btn btn-primary"
        >
          <Plus size={18} />
          Add Application
        </Link>

      </div>

      <div className="bg-base-200 rounded-2xl p-5 flex flex-col md:flex-row gap-4">

        <label className="input input-bordered flex items-center gap-2 flex-1">
          <Search size={18} />
          <input
            type="text"
            className="grow"
            placeholder="Search company or position..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </label>

        <select
          className="select select-bordered w-full md:w-56"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="">
            All Status
          </option>

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

      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : filteredApplications.length === 0 ? (
        <EmptyState />
      ) : (
        <ApplicationTable
          applications={filteredApplications}
          reload={loadApplications}
        />
      )}

    </div>
  );
};

export default Applications;

