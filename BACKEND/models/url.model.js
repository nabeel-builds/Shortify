const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    shorturl: {
      type: String,
      required: true,
      unique: true,
    },

    expiresAt: {
      type: Date,
      default: null,
    },

    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Url", urlSchema, "url");