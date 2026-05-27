import { useState } from "react"

function Chatbot() {

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")

  const handleChat = () => {

  const text = message.toLowerCase()

  if (text.includes("fever")) {

    setReply(
      "You may have a viral infection. Drink plenty of fluids, monitor your temperature and take proper rest."
    )

  }

  else if (text.includes("cough")) {

    setReply(
      "Persistent cough may indicate cold or throat irritation. Warm water and steam inhalation may help."
    )

  }

  else if (text.includes("headache")) {

    setReply(
      "Headaches can happen due to stress, dehydration or lack of sleep. Try resting and drinking water."
    )

  }

  else if (
    text.includes("stomach") ||
    text.includes("vomit") ||
    text.includes("nausea")
  ) {

    setReply(
      "Stomach-related symptoms may indicate gastric infection or food poisoning. Eat light food and stay hydrated."
    )

  }

  else if (
    text.includes("throat") ||
    text.includes("cold")
  ) {

    setReply(
      "You may have throat irritation or common cold symptoms. Drink warm fluids and avoid cold foods."
    )

  }

  else if (
    text.includes("chest pain")
  ) {

    setReply(
      "Chest pain should not be ignored. Please consult a healthcare professional immediately."
    )

  }

  else {

    setReply(
      "I'm unable to fully identify the condition. Please consult a doctor for proper medical advice."
    )

  }

}

  return (

    <div className="bg-slate-950 min-h-screen text-white flex items-center justify-center px-6">

      <div className="bg-slate-900 p-10 rounded-3xl w-full max-w-2xl border border-cyan-400/20">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          AI Healthcare Chatbot
        </h1>

        <textarea
          placeholder="Ask your health question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-40 bg-slate-950 border border-slate-700 rounded-2xl p-4 text-white"
        />

        <button
          onClick={handleChat}
          className="mt-6 w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:bg-cyan-300"
        >
          Ask AI
        </button>

        {reply && (

          <div className="mt-8 bg-slate-950 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              AI Response
            </h2>

            <p className="text-gray-300">
              {reply}
            </p>

          </div>

        )}

      </div>

    </div>

  )

}

export default Chatbot