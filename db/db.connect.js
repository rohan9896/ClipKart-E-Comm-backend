// var mongo = require('mongodb');
const mongoose = require('mongoose')

const uri = "mongodb+srv://Rohan:4Hxd@c824SCATFU@cluster0.qb99z.mongodb.net/Clipkart?retryWrites=true&w=majority";


async function connectDb() {
  try {
    await  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    console.log("successfully connected");
  }
  catch(err) {
    console.err(err);
    console.log("connection failed");
  }
}

module.exports = { connectDb }