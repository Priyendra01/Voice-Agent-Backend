const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Candidate = require("./Candidate");

const Conversation = sequelize.define("Conversation", {
  transcript: { type: DataTypes.TEXT },
  entities_extracted: { type: DataTypes.JSON },
});

Conversation.belongsTo(Candidate);

module.exports = Conversation;
