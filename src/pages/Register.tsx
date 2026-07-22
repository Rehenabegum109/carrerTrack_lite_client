import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { registerUser } from "../services/auth";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const passwordStrength = () => {
    if (formData.password.length >= 8) return "Strong";
    if (formData.password.length >= 5) return "Medium";
    return "Weak";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(formData);

      toast.success("Account created successfully!");

      navigate("/dashboard");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 text-white p-14 flex-col justify-between">

        <div>
          <div className="flex items-center gap-3 mb-12">
            <BriefcaseBusiness size={40} />
            <h1 className="text-3xl font-bold">
              CareerTrack Lite
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Build your career with confidence.
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-md">
            Keep every application, interview and offer
            organized in one beautiful dashboard.
          </p>
        </div>

        <div className="space-y-5">

          <div className="flex gap-3">
            <CheckCircle2 />
            <span>Track unlimited applications</span>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 />
            <span>Dashboard analytics</span>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 />
            <span>Interview reminders</span>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 />
            <span>Clean & secure experience</span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-base-100 rounded-3xl shadow-2xl p-8">

          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold">
              Create Account
            </h2>

            <p className="text-base-content/60 mt-3">
              Start tracking your job applications today.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full h-12"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full h-12"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full h-12 pr-12"
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

            <div className="text-sm">

              Password Strength:

              <span className="font-semibold ml-2 text-primary">
                {passwordStrength()}
              </span>

            </div>

            <button
              disabled={loading}
              className="btn btn-primary w-full h-12"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>

          <div className="divider my-7">OR</div>

          <p className="text-center text-sm">
            Already have an account?

            <Link
              to="/login"
              className="text-primary font-semibold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;
