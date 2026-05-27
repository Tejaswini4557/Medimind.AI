import { useState, useEffect } from "react"
import axios from "axios"

function MedicineReminder() {

  const [medicine, setMedicine] = useState("")
  const [time, setTime] = useState("")
  const [reminders, setReminders] = useState([])

  // Fetch reminders from backend
  const fetchReminders = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/reminders"
      )

      setReminders(response.data)

    }

    catch (error) {

      console.log(error)

    }

  }

  // Add reminder
  const addReminder = async () => {

    if (!medicine || !time) {

      alert("Please enter medicine and time")
      return

    }

    try {

      await axios.post(
        "http://localhost:5000/add-reminder",
        {
          medicine,
          time
        }
      )

      alert("⏰ Reminder Saved Successfully!")

      setMedicine("")
      setTime("")

      fetchReminders()

    }

    catch (error) {

      console.log(error)

    }

  }

  // Load reminders on page open
  useEffect(() => {

    fetchReminders()

  }, [])

  return (

    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center p-10">

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        Medicine Reminder
      </h1>

      {/* Input Card */}

      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl">

        <input
          type="text"
          placeholder="Enter Medicine Name"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none mb-6"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none"
        />

        <button
          onClick={addReminder}
          className="mt-6 w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:bg-cyan-300"
        >
          Add Reminder
        </button>

      </div>

      {/* Reminder List */}

      <div className="w-full max-w-2xl mt-10 space-y-6">

        {

          reminders.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl border border-cyan-400/20"
            >

              <h2 className="text-2xl font-bold text-cyan-400">
                {item.medicine}
              </h2>

              <p className="text-gray-400 mt-2">
                Time: {item.time}
              </p>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default MedicineReminder