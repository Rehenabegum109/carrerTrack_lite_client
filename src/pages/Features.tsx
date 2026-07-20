import {
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BriefcaseBusiness size={38} className="text-emerald-500" />,
    title: "Job Tracking",
    description:
      "Track all your job applications from submission to final decision.",
  },
  {
    id: 2,
    icon: <CalendarDays size={38} className="text-blue-500" />,
    title: "Interview Schedule",
    description:
      "Manage interview dates, reminders, and upcoming career events.",
  },
  {
    id: 3,
    icon: (
      <ChartNoAxesColumnIncreasing
        size={38}
        className="text-purple-500"
      />
    ),
    title: "Analytics Dashboard",
    description:
      "Get insights about your applications and job search progress.",
  },
  {
    id: 4,
    icon: <Search size={38} className="text-orange-500" />,
    title: "Search & Filter",
    description:
      "Quickly find applications using powerful search and filtering.",
  },
  {
    id: 5,
    icon: <ShieldCheck size={38} className="text-red-500" />,
    title: "Secure Login",
    description:
      "Your personal career data stays protected with secure authentication.",
  },
  {
    id: 6,
    icon: <Smartphone size={38} className="text-cyan-500" />,
    title: "Mobile Responsive",
    description:
      "Access your job tracker smoothly from any device.",
  },
];


const Features = () => {
  return (
    <section className="bg-base-200 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            Powerful Features for Your
            <span className="text-emerald-500">
              {" "}Job Search
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            CareerTrack provides everything you need to organize,
            manage, and improve your job hunting journey.
          </p>

        </div>


        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {
            features.map((feature) => (
              <div
                key={feature.id}
                className="
                group rounded-3xl 
                border border-base-300 
                bg-base-100 
                p-8 
                shadow-md
                transition-all 
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                {/* Icon */}
                <div
                  className="
                  mb-6 flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-base-200
                  transition
                  group-hover:scale-110
                  "
                >
                  {feature.icon}
                </div>


                <h3 className="mb-3 text-2xl font-bold">
                  {feature.title}
                </h3>


                <p className="leading-relaxed text-gray-500">
                  {feature.description}
                </p>


              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
};


export default Features;