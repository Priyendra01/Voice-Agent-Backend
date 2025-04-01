const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Candidate = sequelize.define("Candidate", {
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  current_ctc: { type: DataTypes.FLOAT },
  expected_ctc: { type: DataTypes.FLOAT },
  notice_period: { type: DataTypes.STRING },
  experience: { type: DataTypes.INTEGER },
});

module.exports = Candidate;
