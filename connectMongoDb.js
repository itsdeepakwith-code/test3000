import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:stackoverflowclone@stackoverflowclone.yfu2eqw.mongodb.net/?retryWrites=true&w=majority&appName=stackoverflowClone",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      }  //process.env.CONNECTION_URL
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB; 

