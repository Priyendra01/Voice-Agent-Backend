const { DataTypes } = require("sequelize");
const sequelize = require("../voice-agent-backend/config/db");

const Job = sequelize.define("Job", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  requirements: { type: DataTypes.TEXT },
});

module.exports = Job;
