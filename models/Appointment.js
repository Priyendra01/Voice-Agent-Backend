const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Job = require("./Job");
const Candidate = require("./Candidate");

const Appointment = sequelize.define("Appointment", {
  date_time: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "Scheduled" },
});

Appointment.belongsTo(Job);
Appointment.belongsTo(Candidate);

module.exports = Appointment;
