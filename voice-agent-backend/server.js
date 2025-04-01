const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const jobRoutes = require("./routes/jobs");
const candidateRoutes = require("./routes/candidates");
const appointmentRoutes = require("./routes/appointments");

const app = express();


console.log("Job Routes:", jobRoutes);
console.log("Candidate Routes:", candidateRoutes);
console.log("Appointment Routes:", appointmentRoutes);

app.use(cors());
app.use(express.json());



app.use("/jobs", jobRoutes);
app.use("/candidates", candidateRoutes);
app.use("/appointments", appointmentRoutes);



sequelize.sync()
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

