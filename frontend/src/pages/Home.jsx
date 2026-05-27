import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          MediMind AI
        </h1>

        <Link to="/login">
        <button className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300">
            Login
        </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-6">

        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
          Smart Healthcare <br />
          Powered By AI
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          AI symptom checker, prescription scanner,
          medicine reminders and smart healthcare assistance
          all in one platform.
        </p>

        <Link to="/login">
        <button className="mt-8 bg-cyan-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-300">
            Get Started
        </button>
        </Link>

      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 px-10 py-24">

        <Link to="/symptoms">

  <div className="bg-slate-900 p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition cursor-pointer">

    <h2 className="text-2xl font-bold mb-4 text-cyan-400">
      AI Symptom Checker
    </h2>

    <p className="text-gray-400">
      Analyze symptoms intelligently and get possible health insights instantly.
    </p>

  </div>

</Link>

        <Link to="/scanner">

  <div className="bg-slate-900 p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition cursor-pointer">

    <h2 className="text-2xl font-bold mb-4 text-cyan-400">
      Prescription Scanner
    </h2>

    <p className="text-gray-400">
      Upload prescriptions and automatically extract medicine details using OCR.
    </p>

  </div>

</Link>

<Link to="/reminder">

  <div className="bg-slate-900 p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition cursor-pointer">

    <h2 className="text-2xl font-bold mb-4 text-cyan-400">
      Medicine Reminder
    </h2>

    <p className="text-gray-400">
      Never miss medicines with smart reminders and health tracking.
    </p>

  </div>

</Link>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-8 text-center text-gray-500">

        <p>
          © 2026 MediMind AI. All rights reserved.
        </p>

        <p className="mt-2">
          Smart Healthcare Powered By Artificial Intelligence
        </p>

      </footer>

    </div>
  )
}

export default Home