const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/udl-for-teachers"
);

module.exports = mongoose.connection;
