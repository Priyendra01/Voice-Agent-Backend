const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

router.post("/", async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
});

router.get("/", async (req, res) => {
  const appointments = await Appointment.findAll();
  res.json(appointments);
});

module.exports = router;
