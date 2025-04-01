const express = require("express");
const Candidate = require("../models/Candidate");
const router = express.Router();

router.post("/", async (req, res) => {
  const candidate = await Candidate.create(req.body);
  res.json(candidate);
});

router.get("/", async (req, res) => {
  const candidates = await Candidate.findAll();
  res.json(candidates);
});

module.exports = router;
