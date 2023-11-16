const User = require('../models/user')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createUser = async (req, res) => {
  const user = new User({

  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
