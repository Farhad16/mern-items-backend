const mongoose = require("mongoose");

const connectToDataBase = async () => {
  const uri =
    "mongodb+srv://farhadswe:farhad16@cluster0.alosmsu.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDataBase;
