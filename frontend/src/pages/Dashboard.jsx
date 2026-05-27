import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { useState } from "react"

function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {

  const token = localStorage.getItem("token")

  if (!token) {

    navigate("/login")

  }

}, [])
  const [darkMode, setDarkMode] = useState(true)
  const healthData = [
    { day: "Mon", health: 70 },
    { day: "Tue", health: 80 },
    { day: "Wed", health: 65 },
    { day: "Thu", health: 90 },
    { day: "Fri", health: 75 },
    { day: "Sat", health: 85 },
    { day: "Sun", health: 95 },
  ]

  return (
    
    <>
    
    <div className={darkMode
  ? "bg-slate-950 min-h-screen text-white p-10"
  : "bg-gray-100 min-h-screen text-black p-10"
}>
    <button
  onClick={() => setDarkMode(!darkMode)}
  className="mb-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-300"
>
  {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
</button>

      <a
     href="/chatbot"
     className="inline-block ml-4 bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
>
  AI Chatbot
</a>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

  <a
    href="/symptoms"
    className="bg-cyan-400 text-black p-6 rounded-2xl font-bold text-center hover:bg-cyan-300 transition"
  >
    Symptom Checker
  </a>

  <a
    href="/scanner"
    className="bg-cyan-400 text-black p-6 rounded-2xl font-bold text-center hover:bg-cyan-300 transition"
  >
    Prescription Scanner
  </a>

  <a
    href="/reminder"
    className="bg-cyan-400 text-black p-6 rounded-2xl font-bold text-center hover:bg-cyan-300 transition"
  >
    Medicine Reminder
  </a>

</div>
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Total Scans</h2>
          <p className="text-4xl font-bold mt-2 text-cyan-400">
            24
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Medicines Active</h2>
          <p className="text-4xl font-bold mt-2 text-cyan-400">
            8
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Health Score</h2>
          <p className="text-4xl font-bold mt-2 text-cyan-400">
            92%
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-slate-900 mt-10 p-8 rounded-2xl">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Weekly Health Report
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={healthData}>
            <XAxis dataKey="day" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="health"
              stroke="#22d3ee"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

     <a
  href="/profile"
  className="bg-cyan-400 text-black p-6 rounded-2xl font-bold text-center hover:bg-cyan-300 transition"
>

  User Profile

</a>

{/* Health Tips Section */}
<div className="bg-slate-900 mt-10 p-8 rounded-2xl">

  <h2 className="text-3xl font-bold text-cyan-400 mb-6">
    Daily Health Tips
  </h2>

  <div className="space-y-4">

    <div className="bg-slate-950 p-5 rounded-xl">
      💧 Drink at least 3 liters of water daily.
    </div>

    <div className="bg-slate-950 p-5 rounded-xl">
      💤 Sleep for 7-8 hours for better mental health.
    </div>

    <div className="bg-slate-950 p-5 rounded-xl">
      🚶 Walk at least 30 minutes every day.
    </div>

    <div className="bg-slate-950 p-5 rounded-xl">
      🥗 Include fruits and vegetables in your diet.
    </div>

  </div>

</div>

    </div>
    </>
  )
}

export default Dashboard