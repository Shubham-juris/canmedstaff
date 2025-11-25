
import './App.css'
import HERO_IMAGE from "./assets/img/img.jpg";
function App() {

  return (
    <>
  <div className="min-h-screen bg-white text-gray-800">
      {/* Top Notification Bar */}
      <div className="bg-sky-600 text-white text-sm py-2 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          Infection Prevention and Control
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">
                CM
              </div>
              <div>
                <div className="font-bold text-lg">CAN MedStaff</div>
                <div className="text-xs text-gray-500">PSW & Nannies Care</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <a href="#who" className="hover:text-sky-600 transition">
                Who We Are
              </a>
              <a href="#services" className="hover:text-sky-600 transition">
                What We Do
              </a>
              <a href="#join" className="hover:text-sky-600 transition">
                Why Join
              </a>
              <a href="#jobs" className="hover:text-sky-600 transition">
                Job Postings
              </a>
              <a href="#contact" className="hover:text-sky-600 transition">
                Contact Us
              </a>
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-50 transition"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="list-none cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 z-50">
                  {[
                    "Who We Are",
                    "What We Do",
                    "Why Join",
                    "Job Postings",
                    "Contact Us",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/ /g, "")}`}
                      className="block px-4 py-2.5 hover:bg-gray-100 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>
          {/* HERO SECTION with Background Image */}
      <section className="relative bg-sky-700 py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Compassionate Care"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-800/90 to-transparent"></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                The Caring Starts the
                <br />
                <span className="text-sky-200">Moment You Call.</span>
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-sky-100 max-w-2xl">
                CAN MedStaff provides compassionate, professional personal
                support workers (PSWs) and trusted nannies to help families and
                individuals live more comfortably and securely at home.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex justify-center px-8 py-4 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-400 transition shadow-lg"
                >
                  Learn about our Home Care
                </a>

                <a
                  href="tel:+14031234567"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition"
                >
                  Call us: (403) 123-4567
                </a>
              </div>

              <p className="mt-8 text-sm text-sky-200">
                📍 Unit 13C, 2115 27 Ave NE, Calgary, AB
              </p>
            </div>

            {/* Right Side Image */}
            <div className="hidden lg:block">
              <img
                src={HERO_IMAGE}
                alt="Elderly care"
                className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CAN MedStaff is a Calgary-based care provider focusing on
                compassionate in-home personal support and professional nanny
                services. Our staff are background-checked, trained, and
                committed to delivering respectful, dignified care that supports
                independence and wellbeing.
              </p>
            </div>
            <aside className="bg-white p-6 rounded-xl shadow border border-sky-100">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-700">
                <li>PSW & Nanny Services</li>
                <li>Available across Calgary</li>
                <li>Trained & screened staff</li>
                <li>24/7 emergency support</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Care (PSW)",
                desc: "Mobility assistance, hygiene, meal prep, medication reminders.",
              },
              {
                title: "Nanny & Child Care",
                desc: "Experienced nannies for newborns to school-age. Flexible hours.",
              },
              {
                title: "Short-Term & Respite",
                desc: "Temporary care for recovery, travel, or caregiver rest.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white border rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section id="join" className="py-16 bg-sky-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Join CAN MedStaff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Supportive Team", "Flexible Hours", "Competitive Pay"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white p-8 rounded-xl shadow text-center"
                >
                  <h3 className="text-xl font-bold text-sky-600">{item}</h3>
                  <p className="mt-4 text-gray-600">
                    {item === "Supportive Team" &&
                      "Ongoing training and respectful environment."}
                    {item === "Flexible Hours" &&
                      "Part-time or full-time to fit your lifestyle."}
                    {item === "Competitive Pay" &&
                      "Above-average rates + benefits for eligible roles."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Job Postings */}
      <section id="jobs" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-xl hover:shadow-md transition">
              <h3 className="text-xl font-bold">
                Personal Support Worker (PSW)
              </h3>
              <p className="mt-4 text-gray-600">
                Full-time / Part-time • Calgary & surrounding
              </p>
              <a
                href="mailto:careers@canmedstaff.com"
                className="mt-4 inline-block text-sky-600 font-medium hover:underline"
              >
                Apply → careers@canmedstaff.com
              </a>
            </div>
            <div className="p-8 border rounded-xl hover:shadow-md transition">
              <h3 className="text-xl font-bold">Nanny (Live-in / Live-out)</h3>
              <p className="mt-4 text-gray-600">
                Flexible hours • Experience with children required
              </p>
              <a
                href="mailto:careers@canmedstaff.com"
                className="mt-4 inline-block text-sky-600 font-medium hover:underline"
              >
                Apply → careers@canmedstaff.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're here to help. Reach out anytime.
              </p>
              <div className="space-y-4 text-gray-700">
                <p>Unit 13C, 2115 27 Ave NE, Calgary, AB</p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+14031234567"
                    className="text-sky-600 font-medium"
                  >
                    (403) 123-4567
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@canmedstaff.com"
                    className="text-sky-600 font-medium"
                  >
                    info@canmedstaff.com
                  </a>
                </p>
              </div>

              <form className="mt-10 space-y-4">
                <input
                required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                required

                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} CAN MedStaff. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App
