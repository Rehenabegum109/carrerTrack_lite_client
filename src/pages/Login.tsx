
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { loginUser } from "../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await loginUser(formData);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-5">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-72 w-72 rounded-full bg-primary blur-3xl top-10 left-10"></div>
        <div className="absolute h-72 w-72 rounded-full bg-secondary blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="relative w-full max-w-5xl bg-base-100 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        <div className="hidden lg:flex bg-primary text-primary-content p-10 flex-col justify-center">

          <div className="flex items-center gap-3 mb-6">
            <BriefcaseBusiness size={42} />
            <h1 className="text-3xl font-bold">
              CareerTrack Lite
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Manage every job application in one place.
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Track applications, interview schedules,
            offers and rejections with a clean dashboard.
          </p>

          <div className="mt-10 space-y-4">
            <div>✔ Track Applications</div>
            <div>✔ Interview Timeline</div>
            <div>✔ Dashboard Analytics</div>
            <div>✔ Secure Authentication</div>
          </div>

        </div>

        <div className="p-8 lg:p-12">

          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-base-content/60 mt-3">
              Login to continue your journey.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Email
                </span>
              </label>

              <input
                type="email"
                className="input input-bordered w-full h-12"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div>

              <label className="label">
                <span className="label-text font-semibold">
                  Password
                </span>
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className="input input-bordered w-full h-12 pr-12"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  required
                />

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                />
                Remember me
              </label>

              <button
                type="button"
                className="link link-primary"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="btn btn-primary w-full h-12"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>

          </form>

          <div className="divider my-8">
            OR
          </div>

          <p className="text-center">

            Don't have an account?

            <Link
              to="/register"
              className="text-primary font-semibold ml-2"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;
