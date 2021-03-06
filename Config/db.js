import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🧾 Database Connected ...`.cyan.underline);
  } catch (error) {
    console.log(`Error in mongodb connection - ${error}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
