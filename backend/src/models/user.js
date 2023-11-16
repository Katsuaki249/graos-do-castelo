const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true
  },
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = {
  User,
  userSchema,
}
