import { Star } from "lucide-react";


const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    review:
      "CareerTrack helped me stay organized during my job search. I could easily track every application and interview.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Software Engineer",
    review:
      "The dashboard made my job hunting process simple. I never missed an interview or important deadline.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "UI/UX Designer",
    review:
      "A clean and powerful tool for managing applications. It saved me a lot of time.",
  },
];


const Testimonials = () => {
  return (
    <section className="bg-base-200 py-24">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            What Our Users
            <span className="text-emerald-500">
              {" "}Say
            </span>
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Thousands of job seekers use CareerTrack
            to manage their career journey.
          </p>

        </div>




        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">


          {
            testimonials.map((item) => (

              <div
                key={item.id}
                className="
                rounded-3xl
                border
                border-base-300
                bg-base-100
                p-8
                shadow-lg
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                "
              >


                {/* Rating */}

                <div className="mb-5 flex gap-1">

                  {
                    Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))
                  }

                </div>




                {/* Review */}

                <p className="leading-relaxed text-gray-500">
                  "{item.review}"
                </p>




                {/* User */}

                <div className="mt-8 flex items-center gap-4">


                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-500
                    font-bold
                    text-white
                    "
                  >
                    {item.name.charAt(0)}
                  </div>



                  <div>

                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>

                  </div>


                </div>



              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
};


export default Testimonials;