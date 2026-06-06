const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["image", "video", "raw"],
      required: true,
    },
    originalName: String,
    size: Number,
    format: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);