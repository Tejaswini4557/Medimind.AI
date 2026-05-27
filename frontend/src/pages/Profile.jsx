import { useState } from "react"
import axios from "axios"

function Profile() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [bloodGroup, setBloodGroup] = useState("")
  const [allergies, setAllergies] = useState("")

  const saveProfile = async () => {

    try {

      const response = await axios.post(

        "http://localhost:5000/save-profile",

        {
          name,
          age,
          gender,
          bloodGroup,
          allergies
        }

      )

      alert(response.data.message)

    }

    catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-2xl bg-slate-900 border border-cyan-400/20 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
          User Profile
        </h1>

        {/* Name */}

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 text-white outline-none mb-6"
        />

        {/* Age */}

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 text-white outline-none mb-6"
        />

        {/* Gender */}

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 text-white outline-none mb-6"
        >

          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>

        </select>

        {/* Blood Group */}

        <input
          type="text"
          placeholder="Blood Group"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 text-white outline-none mb-6"
        />

        {/* Allergies */}

        <textarea
          placeholder="Allergies / Medical Conditions"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 text-white outline-none mb-6 h-32"
        />

        {/* Save Button */}

        <button

          onClick={saveProfile}

          className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-5 rounded-2xl text-2xl font-bold transition"

        >

          Save Profile

        </button>

      </div>

    </div>

  )

}

export default Profile