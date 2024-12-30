import mongoose from "mongoose";
import 'dotenv';
const connectionUri = process.env.MONGO_URI;

const connectDB = async () => {
    await mongoose.connect(connectionUri);
    console.log(`Database Connected at host: ${mongoose.connection.host}`);
};

export default connectDB;