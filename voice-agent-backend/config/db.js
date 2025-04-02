const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("voice_agent_db", "root", "12345", {
  host: "localhost",
  dialect: "mysql", // Change to "postgres" if using PostgreSQL
});

module.exports = sequelize; // ✅ Make sure this is correctly exported

