const mongoose = require("mongoose");

console.log(`*****URI*****`, process.env.MONGO_URI);

// this function will be called in the server.js
const connectDB = async () => {
  try {
    // mongodb connection string
    // uses your database's specific URI
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
