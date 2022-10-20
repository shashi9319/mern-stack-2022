import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4000;
app.use(cors());

await mongoose.connect(
  "mongodb+srv://shashigagan1:Shashi1993@bitfumes.ixp3x6p.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successfull");

app.get("/", (req, res) => {
  res.send("Hello Mern");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
