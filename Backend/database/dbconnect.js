import mongoose from "mongoose";

const dbconnect = () => {
  return mongoose
    .connect("mongodb+srv://abhi:abhi1234@cluster1.yutit.mongodb.net/resumebuilder", {
     
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    });
};

export default dbconnect;
