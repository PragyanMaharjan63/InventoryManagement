import mongoose from "mongoose";

const connectDB = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI);
    console.log("connected to database succesfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
