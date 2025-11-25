
import './App.css'

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
      </div>
    </>
  )
}

export default App
