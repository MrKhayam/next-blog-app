import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khayam:anamkhayam@next-blog.w9mc8.mongodb.net/"
    );
    console.log(`Database Connected at host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};


export default connectDB;