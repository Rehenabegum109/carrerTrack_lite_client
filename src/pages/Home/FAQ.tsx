const faqs = [
  {
    id: 1,
    question: "Is CareerTrack free?",
    answer:
      "Yes, CareerTrack Lite provides free access to manage your job applications and track your progress.",
  },
  {
    id: 2,
    question: "Can I track interviews?",
    answer:
      "Yes, you can add interview schedules, reminders, and keep track of your interview process.",
  },
  {
    id: 3,
    question: "Can I edit applications?",
    answer:
      "Yes, you can update job details, application status, notes, and other information anytime.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Yes, your career information is protected with secure authentication and privacy features.",
  },
];


const FAQ = () => {
  return (
    <section className="bg-base-100 py-24">

      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl font-extrabold">
            Frequently Asked
            <span className="text-emerald-500">
              {" "}Questions
            </span>
          </h2>

          <p className="mt-4 text-gray-500">
            Find answers to common questions about CareerTrack.
          </p>

        </div>



        {/* FAQ Accordion */}

        <div className="space-y-4">

          {
            faqs.map((faq) => (

              <div
                key={faq.id}
                className="
                collapse
                collapse-plus
                rounded-2xl
                border
                border-base-300
                bg-base-100
                shadow-md
                "
              >

                <input
                  type="radio"
                  name="faq-accordion"
                />


                <div
                  className="
                  collapse-title
                  text-lg
                  font-bold
                  "
                >
                  {faq.question}
                </div>


                <div
                  className="
                  collapse-content
                  text-gray-500
                  leading-relaxed
                  "
                >
                  <p>
                    {faq.answer}
                  </p>
                </div>


              </div>

            ))
          }

        </div>


      </div>

    </section>
  );
};


export default FAQ;