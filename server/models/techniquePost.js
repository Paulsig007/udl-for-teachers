const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const techniquePostSchema = new Schema(
  {
    techniqueTitle: {
      type: String,
      required: true,
      trim: true,
    },
    techniqueAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    techniqueDate: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    techniqueText: {
      type: String,
      required: "You need to leave a technique!",
      minlength: 1,
      maxlength: 5000,
      trim: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const TechniquePost = model("TechniquePost", techniquePostSchema);

module.exports = TechniquePost;
