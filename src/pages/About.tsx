
import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  User,
} from "lucide-react";

const About = () => {
  const features = [
    "JWT Authentication",
    "Protected Routes",
    "Application CRUD",
    "Dashboard Analytics",
    "Search & Filter",
    "Responsive Design",
    "PostgreSQL + Prisma",
    "REST API",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-base-100 to-base-200"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="badge badge-primary badge-lg">
            About Project
          </span>

          <h2 className="text-5xl font-extrabold mt-5">
            About CareerTrack Lite
          </h2>

          <p className="mt-5 text-lg text-base-content/70">
            CareerTrack Lite is a modern full-stack job application
            tracker that helps job seekers organize, monitor and
            manage their applications from one beautiful dashboard.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <div className="rounded-3xl bg-base-100 shadow-2xl border border-base-300 p-8">

            <div className="flex items-center gap-6">

              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white">

                <User size={45} />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Rehena Begum
                </h3>

                <p className="text-primary font-semibold mt-1">
                  MERN Stack Developer
                </p>

              </div>

            </div>

            <div className="divider"></div>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary" />
                <div>
                  <p className="font-semibold">
                    Student ID
                  </p>
                  <p className="text-base-content/70">
                    L2B7-0842
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Code2 className="text-primary" />
                <div>
                  <p className="font-semibold">
                    Frontend
                  </p>
                  <p className="text-base-content/70">
                    React • TypeScript • Tailwind CSS • DaisyUI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Database className="text-primary" />
                <div>
                  <p className="font-semibold">
                    Backend
                  </p>
                  <p className="text-base-content/70">
                    Node.js • Express.js • Prisma • PostgreSQL
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <BriefcaseBusiness size={35} />

              <h3 className="text-3xl font-bold">
                Project Highlights
              </h3>

            </div>

            <p className="opacity-90 leading-8">
              CareerTrack Lite provides an easy way to manage job
              applications, monitor progress, and prepare for
              interviews with a clean dashboard and secure
              authentication system.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur"
                >
                  <BadgeCheck size={18} />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;