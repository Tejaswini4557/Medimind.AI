import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import SymptomChecker from "./pages/SymptomChecker"
import PrescriptionScanner from "./pages/PrescriptionScanner"
import MedicineReminder from "./pages/MedicineReminder"
import Dashboard from "./pages/Dashboard"
import Chatbot from "./pages/Chatbot"
import Profile from "./pages/Profile"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/symptoms" element={<SymptomChecker />} />

        <Route path="/scanner" element={<PrescriptionScanner />} />

        <Route path="/reminder" element={<MedicineReminder />} />
        
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>

  )

}

export default App