import { useState } from "react"
import axios from "axios"

function SymptomChecker() {

  const [symptoms, setSymptoms] = useState("")
  const [result, setResult] = useState(null)

  const analyzeSymptoms = () => {

    axios.post("http://localhost:5000/analyze", {

      symptoms: symptoms

    })

    .then((response) => {

      setResult(response.data)

    })

    .catch((error) => {

      console.log(error)

    })

  }

  return (

    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6 py-16">

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        AI Symptom Checker
      </h1>

      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl border border-cyan-400/20">

        <textarea
          placeholder="Enter symptoms like fever, cough, headache..."
          className="w-full h-40 bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>

        <button
          onClick={analyzeSymptoms}
          className="mt-6 w-full bg-cyan-400 text-black py-4 rounded-xl text-lg font-bold hover:bg-cyan-300"
        >
          Analyze Symptoms
        </button>

      </div>

      {
        result && (

          <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl border border-cyan-400/20 mt-10">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Prediction Result
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-gray-400">
                  Possible Disease
                </p>

                <h3 className="text-2xl font-bold">
                  {result.disease}
                </h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Severity
                </p>

                <h3 className="text-xl">
                  {result.severity}
                </h3>
              </div>

              <div>
                <p className="text-gray-400">
                  Precautions
                </p>

                <h3 className="text-lg">
                  {result.precautions}
                </h3>
              </div>

            </div>

          </div>

        )
      }

    </div>

  )

}

export default SymptomChecker