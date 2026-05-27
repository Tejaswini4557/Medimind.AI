const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const Reminder = require("./models/Reminder")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("./models/User")
const Profile = require("./models/Profile")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/medimind")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

// Home Route
app.get("/", (req, res) => {

  res.send("MediMind Backend Running")

})

// Symptom Checker Route
app.post("/analyze", (req, res) => {

  const { symptoms } = req.body

  let result = {}

  if (symptoms.includes("fever")) {

    result = {
      disease: "Viral Fever",
      severity: "Medium",
      precautions: "Drink fluids and take proper rest."
    }

  }

  else if (symptoms.includes("cough")) {

    result = {
      disease: "Cold & Cough",
      severity: "Low",
      precautions: "Stay hydrated and avoid cold foods."
    }

  }

  else {

    result = {
      disease: "Unknown",
      severity: "Unknown",
      precautions: "Please consult a doctor."
    }

  }

  res.json(result)

})

// Add Reminder Route
app.post("/add-reminder", async (req, res) => {

  try {

    const { medicine, time } = req.body

    const newReminder = new Reminder({

      medicine,
      time

    })

    await newReminder.save()

    res.json({
      message: "Reminder Saved Successfully"
    })

  }

  catch (error) {

    console.log(error)

  }

})

// Get Reminders Route
app.get("/reminders", async (req, res) => {

  try {

    const reminders = await Reminder.find()

    res.json(reminders)

  }

  catch (error) {

    console.log(error)

  }

})

app.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body

    // Check existing user
    const existingUser = await User.findOne({ email })

    if (existingUser) {

      return res.json({
        message: "User already exists"
      })

    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = new User({

      name,
      email,
      password: hashedPassword

    })

    await newUser.save()

    res.json({
      message: "Signup Successful"
    })

  }

  catch (error) {

    console.log(error)

  }

})
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    // Find user
    const user = await User.findOne({ email })

    if (!user) {

      return res.json({
        message: "User not found"
      })

    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {

      return res.json({
        message: "Invalid Password"
      })

    }

    // Create token
    const token = jwt.sign(

      { id: user._id },

      "secretkey"

    )

    res.json({

      message: "Login Successful",
      token

    })

  }

  catch (error) {

    console.log(error)

  }

})
app.post("/reset-password", async (req, res) => {

  try {

    const { email, newPassword } = req.body

    // Find user
    const user = await User.findOne({ email })

    if (!user) {

      return res.json({
        message: "User not found"
      })

    }

    // Encrypt new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    )

    // Update password
    user.password = hashedPassword

    await user.save()

    res.json({
      message: "Password Updated Successfully"
    })

  }

  catch (error) {

    console.log(error)

  }

})
app.post("/save-profile", async (req, res) => {

  try {

    const {

      name,
      age,
      gender,
      bloodGroup,
      allergies

    } = req.body

    const newProfile = new Profile({

      name,
      age,
      gender,
      bloodGroup,
      allergies

    })

    await newProfile.save()

    res.json({
      message: "Profile Saved Successfully"
    })

  }

  catch (error) {

    console.log(error)

  }

})
const PORT = 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})