import {
  Briefcase,
  CalendarCheck,
  CheckCircle,
  XCircle,
} from "lucide-react";


const stats = [
  {
    id: 1,
    title: "Applications",
    value: "25",
    icon: <Briefcase size={30} className="text-emerald-500" />,
  },
  {
    id: 2,
    title: "Interview",
    value: "5",
    icon: <CalendarCheck size={30} className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Offers",
    value: "2",
    icon: <CheckCircle size={30} className="text-green-500" />,
  },
  {
    id: 4,
    title: "Rejected",
    value: "8",
    icon: <XCircle size={30} className="text-red-500" />,
  },
];


const DashboardPreview = () => {
  return (
    <section className="bg-base-200 py-24">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            Manage Everything From Your
            <span className="text-emerald-500">
              {" "}Dashboard
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Get a clear overview of your job search progress,
            interviews, and career opportunities.
          </p>

        </div>



        {/* Dashboard Mockup */}
        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-base-300
          bg-base-100
          p-8
          shadow-2xl
          "
        >

          {/* Top Bar */}
          <div className="mb-8 flex items-center justify-between">

            <h3 className="text-2xl font-bold">
              CareerTrack Dashboard
            </h3>


            <div className="
              rounded-full
              bg-emerald-100
              px-4
              py-2
              text-sm
              font-semibold
              text-emerald-600
            ">
              Active
            </div>

          </div>



          {/* Stats Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {
              stats.map((stat) => (
                <div
                  key={stat.id}
                  className="
                  rounded-2xl
                  border
                  border-base-300
                  bg-base-100
                  p-6
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                  "
                >

                  <div className="mb-4">
                    {stat.icon}
                  </div>


                  <h4 className="text-3xl font-bold">
                    {stat.value}
                  </h4>


                  <p className="mt-2 text-gray-500">
                    {stat.title}
                  </p>

                </div>
              ))
            }

          </div>




          {/* Fake Chart Area */}
          <div
            className="
            mt-10
            rounded-2xl
            bg-base-200
            p-8
            "
          >

            <h4 className="mb-6 text-xl font-bold">
              Application Progress
            </h4>


            <div className="space-y-5">

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Applied</span>
                  <span>25</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="
                    h-3
                    w-[80%]
                    rounded-full
                    bg-emerald-500
                    "
                  />
                </div>
              </div>



              <div>
                <div className="mb-2 flex justify-between">
                  <span>Interview</span>
                  <span>5</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="
                    h-3
                    w-[40%]
                    rounded-full
                    bg-blue-500
                    "
                  />
                </div>
              </div>



              <div>
                <div className="mb-2 flex justify-between">
                  <span>Offer</span>
                  <span>2</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="
                    h-3
                    w-[20%]
                    rounded-full
                    bg-purple-500
                    "
                  />
                </div>
              </div>


            </div>

          </div>


        </div>


      </div>

    </section>
  );
};


export default DashboardPreview;