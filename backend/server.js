
const express = require("express");
const path=require("path");
require("dotenv").config({ path: "./config.env" });
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();

app.use(express.json());

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));

// Error Handler Middleware
app.use(errorHandler);



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
      
  )
);