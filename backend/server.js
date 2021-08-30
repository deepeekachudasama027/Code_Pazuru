require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const session = require("express-session");
connectDB();

app.set('trust proxy',1)
app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    resave: true,
    saveUninitialized: false
  })
);

app.use(express.json());


// Connecting Routes
app.use("/api/auth", require("./routes/auth"));


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
