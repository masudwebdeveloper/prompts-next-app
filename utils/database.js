import mongoose from "mongoose";


export const connectToDB = async () => {
    let isConnected = false; // track the connection
    mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};
