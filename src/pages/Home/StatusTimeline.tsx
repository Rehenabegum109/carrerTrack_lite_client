import {
  Bookmark,
  Send,
  ClipboardCheck,
  UsersRound,
  Trophy,
} from "lucide-react";


const timeline = [
  {
    id: 1,
    title: "Saved",
    description: "Save interesting job opportunities for later.",
    icon: <Bookmark size={30} />,
  },
  {
    id: 2,
    title: "Applied",
    description: "Submit your application and track progress.",
    icon: <Send size={30} />,
  },
  {
    id: 3,
    title: "Assessment",
    description: "Complete company tests and assignments.",
    icon: <ClipboardCheck size={30} />,
  },
  {
    id: 4,
    title: "Interview",
    description: "Manage interview schedules and updates.",
    icon: <UsersRound size={30} />,
  },
  {
    id: 5,
    title: "Offer",
    description: "Celebrate your successful job offer.",
    icon: <Trophy size={30} />,
  },
];


const StatusTimeline = () => {
  return (
    <section className="bg-base-100 py-24">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            Track Your Application
            <span className="text-emerald-500">
              {" "}Journey
            </span>
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Follow every step of your job application process
            from saving a job to receiving an offer.
          </p>

        </div>




        {/* Timeline */}

        <div className="relative">


          {/* Line */}
          <div
            className="
            absolute
            left-8
            top-0
            hidden
            h-full
            w-1
            bg-emerald-200
            md:block
            "
          />



          <div className="space-y-10">


            {
              timeline.map((item, index) => (

                <div
                  key={item.id}
                  className="
                  relative
                  flex
                  items-start
                  gap-6
                  "
                >


                  {/* Icon */}
                  <div
                    className="
                    z-10
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-500
                    text-white
                    shadow-lg
                    "
                  >
                    {item.icon}
                  </div>



                  {/* Content */}

                  <div
                    className="
                    rounded-3xl
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

                    <div className="flex items-center gap-3">

                      <span
                        className="
                        rounded-full
                        bg-emerald-100
                        px-3
                        py-1
                        text-sm
                        font-bold
                        text-emerald-600
                        "
                      >
                        Step {index + 1}
                      </span>


                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                    </div>



                    <p className="mt-3 text-gray-500">
                      {item.description}
                    </p>


                  </div>


                </div>

              ))
            }


          </div>


        </div>



      </div>


    </section>
  );
};


export default StatusTimeline;