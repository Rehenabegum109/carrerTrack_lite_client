import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">


          {/* Brand */}
          <div>

            <h2 className="text-3xl font-extrabold">
              Career
              <span className="text-emerald-400">
                Track
              </span>
            </h2>


            <p className="mt-4 text-sm text-gray-300">
              Manage your job applications, track progress,
              and move closer to your dream career.
            </p>

          </div>



          {/* Quick Links */}
          <div>

            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>


            <ul className="space-y-3 text-sm text-gray-300">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-emerald-400"
                >
                  Home
                </Link>
              </li>


              <li>
                <a
                  href="#features"
                  className="transition hover:text-emerald-400"
                >
                  Features
                </a>
              </li>


              <li>
                <Link
                  to="/dashboard"
                  className="transition hover:text-emerald-400"
                >
                  Dashboard
                </Link>
              </li>


              <li>
                <a
                  href="#faq"
                  className="transition hover:text-emerald-400"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>




          {/* Contact */}
          <div>

            <h3 className="mb-4 text-lg font-bold">
              Contact
            </h3>


            <p className="flex items-center gap-2 text-sm text-gray-300">
              <Mail size={18} />
              support@careertrack.com
            </p>

          </div>





          {/* Social */}
          <div>

            <h3 className="mb-4 text-lg font-bold">
              Follow Us
            </h3>


            <div className="flex gap-4">


              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-emerald-500
                "
              >
                <FaGithub size={20} />
              </a>



              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-emerald-500
                "
              >
                <FaLinkedin size={20} />
              </a>


            </div>


          </div>


        </div>




        {/* Bottom */}


{/* Bottom */}

<div
  className="
  mt-12
  border-t
  border-white/10
  pt-6
  flex flex-col md:flex-row
  items-center
  justify-between
  gap-3
  text-sm
  text-gray-400
  "
>
  <p>
    © 2026 CareerTrack Lite. All rights reserved.
  </p>

  <div className="text-center md:text-right">
    <p>
      Developed by{" "}
      <span className="font-semibold text-white">
        Rehena Begum
      </span>
    </p>

    <p>
      Student ID:{" "}
      <span className="font-semibold text-emerald-400">
        L2B7-0842
      </span>
    </p>
  </div>
</div>
        <div
          className="
          mt-12
          border-t
          border-white/10
          pt-6
          text-center
          text-sm
          text-gray-400
          "
        >
          © 2026 CareerTrack Lite. All rights reserved.
        </div>


      </div>

    </footer>
  );
};


export default Footer;