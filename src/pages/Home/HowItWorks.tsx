import {
  UserPlus,
  FilePlus2,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlus size={40} className="text-emerald-500" />,
    step: "01",
    title: "Create Account",
    description:
      "Sign up and create your personal CareerTrack account in seconds.",
  },
  {
    id: 2,
    icon: <FilePlus2 size={40} className="text-blue-500" />,
    step: "02",
    title: "Add Job Applications",
    description:
      "Save job details, company information, and application status.",
  },
  {
    id: 3,
    icon: <TrendingUp size={40} className="text-purple-500" />,
    step: "03",
    title: "Track Your Progress",
    description:
      "Monitor interviews, offers, and improve your job search strategy.",
  },
];


const HowItWorks = () => {
  return (
    <section className="bg-base-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            How It
            <span className="text-emerald-500">
              {" "}Works?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Start organizing your job search with just three simple steps.
          </p>

        </div>


        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">

          {
            steps.map((item, index) => (
              <div
                key={item.id}
                className="relative"
              >

                {/* Card */}
                <div
                  className="
                  rounded-3xl
                  border border-base-300
                  bg-base-100
                  p-8
                  text-center
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  "
                >

                  {/* Number */}
                  <div
                    className="
                    mx-auto mb-5
                    flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    bg-emerald-100
                    text-xl
                    font-bold
                    text-emerald-600
                    "
                  >
                    {item.step}
                  </div>


                  {/* Icon */}
                  <div
                    className="
                    mx-auto mb-5
                    flex h-20 w-20
                    items-center justify-center
                    rounded-2xl
                    bg-base-200
                    "
                  >
                    {item.icon}
                  </div>


                  <h3 className="mb-3 text-2xl font-bold">
                    {item.title}
                  </h3>


                  <p className="text-gray-500">
                    {item.description}
                  </p>


                </div>


                {/* Arrow */}
                {
                  index !== steps.length - 1 && (
                    <div
                      className="
                      absolute
                      right-[-35px]
                      top-1/2
                      hidden
                      text-4xl
                      text-emerald-400
                      md:block
                      "
                    >
                      →
                    </div>
                  )
                }


              </div>
            ))
          }


        </div>


      </div>

    </section>
  );
};


export default HowItWorks;