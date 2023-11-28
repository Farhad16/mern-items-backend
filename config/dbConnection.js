const mongoose = require("mongoose");

let isConnected = false;

const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  const url =
    "mongodb+srv://farhadswe:farhad16@cluster0.alosmsu.mongodb.net/?retryWrites=true&w=majority";
  if (!url) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(url, {
      dbName: "mern-shopping",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

module.exports = connectToDatabase;
