const mongoose = require('mongoose');

const url = process.env.MONGODB_DATABASE_URL;

async function main() {
  try {
    await mongoose.connect(url)
    console.log('Database Connected!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;
