import mongoose from "mongoose";

var isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("database is connected...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "promptshare",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("database is connected...");
  } catch (error) {
    console.log(error);
  }
};
