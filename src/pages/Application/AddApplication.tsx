
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { toast } from "sonner";
import { createApplication } from "../../services/application";


const AddApplication = () => {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createApplication(formData);

      toast.success(
        "Application added successfully!"
      );

      navigate("/applications");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Add New Application
        </h1>

        <p className="text-slate-400 mt-2">
          Keep track of your job applications.
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >

          <div>
            <label className="label">
              Company
            </label>

            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name (e.g. Google)"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              Position
            </label>

            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter job position (e.g. Frontend Developer)"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              Location
            </label>

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location (e.g. Remote / Dhaka)"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Job Type
            </label>

            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              
              className="select select-bordered w-full"
            >
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
          </div>

          <div>
            <label className="label">
              Salary
            </label>

            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter expected salary"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="select select-bordered w-full"
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
          </div>

          <div className="md:col-span-2">

            <label className="label">
              Notes
            </label>

            <textarea
              rows={5}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Write additional notes about this application..."
              className="textarea textarea-bordered w-full"
            />

          </div>

          <div className="md:col-span-2 flex justify-end">

            <button
              className="btn btn-primary gap-2"
              disabled={loading}
            >
              <BriefcaseBusiness size={18} />

              {loading
                ? "Saving..."
                : "Save Application"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddApplication;

