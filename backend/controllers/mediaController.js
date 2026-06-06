const cloudinary = require("../config/cloudinary");


const Media = require("../models/media");

exports.uploadMedia = async (req, res) => {
  try {
    console.log("1. file received");

    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("2. uploading to cloudinary...");

    const base64File = `data:${file.mimetype};base64,${file.buffer.toString(
      "base64"
    )}`;

    const result = await cloudinary.uploader.upload(base64File, {
      resource_type: "auto",
    });

    console.log("3. cloudinary done");

    const media = await Media.create({
      url: result.secure_url,
      public_id: result.public_id,
      type: result.resource_type,
      format: result.format,
      size: result.bytes,
      originalName: file.originalname,
    });

    console.log("4. saved in DB");

    return res.status(201).json({
      success: true,
      data: media,
    });

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
};