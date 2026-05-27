import { useState } from "react"
import Tesseract from "tesseract.js"

function PrescriptionScanner() {

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState("")
  const [detectedText, setDetectedText] = useState("")
  const [loading, setLoading] = useState(false)

  // Upload image
  const handleImageUpload = (e) => {

    const file = e.target.files[0]

    if (file) {

      setImage(file)

      setPreview(URL.createObjectURL(file))

    }

  }

  // OCR Scan
  const scanPrescription = async () => {

    if (!image) {

      alert("Please upload prescription image")

      return

    }

    setLoading(true)

    try {

      const result = await Tesseract.recognize(

        image,

        "eng"

      )

      setDetectedText(result.data.text)

    }

    catch (error) {

      console.log(error)

    }

    setLoading(false)

  }

  return (

    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center px-6 py-16">

      <h1 className="text-5xl font-bold text-cyan-400 mb-10 text-center">
        AI Prescription Scanner
      </h1>

      {/* Upload Card */}

      <div className="bg-slate-900 p-10 rounded-3xl border border-cyan-400/20 w-full max-w-2xl">

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700"
        />

        {

          preview && (

            <img
              src={preview}
              alt="Prescription Preview"
              className="mt-8 rounded-2xl w-full max-h-[500px] object-cover border border-cyan-400/20"
            />

          )

        }

        <button

          onClick={scanPrescription}

          className="mt-8 w-full bg-cyan-400 hover:bg-cyan-300 text-black py-4 rounded-2xl text-xl font-bold transition"

        >

          {

            loading

            ? "Scanning..."

            : "Scan Prescription"

          }

        </button>

      </div>

      {/* OCR Result */}

      {

        detectedText && (

          <div className="bg-slate-900 mt-10 p-8 rounded-3xl border border-cyan-400/20 w-full max-w-2xl">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Extracted Text
            </h2>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-700">

              <p className="text-gray-300 whitespace-pre-line leading-8">

                {detectedText}

              </p>

            </div>

          </div>

        )

      }

    </div>

  )

}

export default PrescriptionScanner