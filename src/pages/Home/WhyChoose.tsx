import {
  BriefcaseBusiness,
  BarChart3,
  BellRing,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BriefcaseBusiness size={40} className="text-emerald-500" />,
    title: "Organize Applications",
    description:
      "Keep all your job applications organized in one secure place.",
  },
  {
    id: 2,
    icon: <BarChart3 size={40} className="text-sky-500" />,
    title: "Track Your Progress",
    description:
      "Monitor every stage from Applied to Interview and Offer.",
  },
  {
    id: 3,
    icon: <BellRing size={40} className="text-orange-500" />,
    title: "Stay Updated",
    description:
      "Never miss interview schedules or important deadlines.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-base-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold">
            Why Choose
            <span className="text-emerald-500"> CareerTrack?</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Everything you need to manage your job search in one place.
            Stay organized, save time, and focus on getting hired.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;