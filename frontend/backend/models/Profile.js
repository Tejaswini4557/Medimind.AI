const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({

  name: String,
  age: Number,
  gender: String,
  bloodGroup: String,
  allergies: String

})

module.exports = mongoose.model(
  "Profile",
  profileSchema
)