import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const [isSignup, setIsSignup] = useState(false)
  const [showForgot, setShowForgot] = useState(false)
  const [newPassword, setNewPassword] = useState("")

  return (

    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-slate-900 border border-cyan-400/30 rounded-[40px] p-12 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

        {/* Heading */}

        <h1 className="text-6xl font-bold text-cyan-400 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-4 text-xl">
          Login to access MediMind AI
        </p>

        {/* Signup Name */}

        {

          isSignup && (

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-10 bg-slate-950 border border-cyan-400/30 rounded-2xl px-6 py-5 text-white outline-none text-lg"
            />

          )

        }

        {/* Email */}

        <div className="mt-10">

          <label className="text-white text-xl">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-4 bg-slate-950 border border-cyan-400/30 rounded-2xl px-6 py-5 text-white outline-none text-lg"
          />

        </div>

        {/* Password */}

        <div className="mt-8">

          <label className="text-white text-xl">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-4 bg-slate-950 border border-cyan-400/30 rounded-2xl px-6 py-5 text-white outline-none text-lg"
          />
          <p
  onClick={() => setShowForgot(!showForgot)}
  className="text-cyan-400 mt-4 cursor-pointer"
>

  Forgot Password?

</p>
{

  showForgot && (

    <div className="mt-6">

      <input
        type="password"
        placeholder="Enter New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full bg-slate-950 border border-cyan-400/30 rounded-2xl px-6 py-5 text-white outline-none text-lg"
      />

      <button

        onClick={async () => {

          try {

            const response = await axios.post(

              "http://localhost:5000/reset-password",

              {
                email,
                newPassword
              }

            )

            alert(response.data.message)

          }

          catch (error) {

            console.log(error)

          }

        }}

        className="w-full mt-6 bg-red-500 hover:bg-red-400 text-white py-4 rounded-2xl text-xl font-bold"
      >

        Reset Password

      </button>

    </div>

  )

}

        </div>

        {/* Show Password */}

        <div className="flex items-center gap-3 mt-6">

          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="w-5 h-5"
          />

          <p className="text-white text-lg">
            Show Password
          </p>

        </div>

        {/* Button */}

        <button

          onClick={async () => {

            try {

              if (isSignup) {

                const response = await axios.post(

                  "http://localhost:5000/signup",

                  {
                    name,
                    email,
                    password
                  }

                )

                alert(response.data.message)

              }

              else {

                const response = await axios.post(

                  "http://localhost:5000/login",

                  {
                    email,
                    password
                  }

                )

                if (response.data.message === "Login Successful") {

                  alert("Login Successful 😎🔥")
                  localStorage.setItem(
                 "token",
                  response.data.token
)

                  navigate("/dashboard")

                }

                else {

                  alert(response.data.message)

                }

              }

            }

            catch (error) {

              console.log(error)

            }

          }}

          className="w-full mt-10 bg-cyan-400 hover:bg-cyan-300 text-black py-5 rounded-2xl text-2xl font-bold transition"
        >

          {

            isSignup

            ? "Signup"

            : "Login"

          }

        </button>

        {/* Bottom Toggle */}

        <div className="mt-10 text-center">

          <p
            onClick={() => setIsSignup(!isSignup)}
            className="text-cyan-400 text-xl cursor-pointer"
          >

            {

              isSignup

              ? "Already have an account? Login"

              : "Don't have an account? Signup"

            }

          </p>

        </div>

      </div>

    </div>

  )

}

export default Login