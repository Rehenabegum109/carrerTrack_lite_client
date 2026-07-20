import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import banner from "../../assets/Job hunt-amico.png";

const Banner= () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="hero max-w-7xl mx-auto px-6 py-20">
        <div className="hero-content flex-col-reverse gap-14 lg:flex-row">

          {/* Left Content */}
          <div className="flex-1">

            <div className="badge badge-success badge-outline px-5 py-4 gap-2">
              <CheckCircle2 size={16} />
              Smart Job Application Tracker
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Track Your
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {" "}
                Career
              </span>
              <br />
              Like a Pro
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              CareerTrack Lite helps you organize job applications,
              monitor interviews, manage offers, and land your dream job
              faster.
            </p>

            <div className="mt-8 flex gap-4">

              <Link to="/register" className="btn btn-success">
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link to="/applications" className="btn btn-outline btn-success">
                Explore
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <h2 className="text-3xl font-bold text-success">
                  500+
                </h2>

                <p className="text-gray-500">
                  Applications
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-info">
                  120+
                </h2>

                <p className="text-gray-500">
                  Interviews
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-warning">
                  45+
                </h2>

                <p className="text-gray-500">
                  Offers
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex-1 flex justify-center">

            <img
              src={banner}
              alt="Career Banner"
              className="w-full max-w-xl animate-float"
            />

            {/* Floating Card */}
            <div className="absolute bottom-0 left-5 rounded-2xl bg-white p-5 shadow-2xl">

              <h3 className="font-bold">
                Weekly Progress
              </h3>

              <progress
                className="progress progress-success w-52 mt-3"
                value={80}
                max={100}
              ></progress>

              <p className="mt-2 text-sm text-gray-500">
                80% Target Completed
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;