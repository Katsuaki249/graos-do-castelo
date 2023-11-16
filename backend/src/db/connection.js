const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:LlpehAN3I1IqRXE5@graosdocastelo.mmjgizl.mongodb.net/?retryWrites=true&w=majority';

async function main() {
  try {
    await mongoose.connect(url)
    console.log('Database Connected!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;

//LlpehAN3I1IqRXE5
