const express = require("express");
const router = express.Router();


const upload = require("../middleware/upload");

const { uploadMedia } = require("../controllers/mediaController");

router.post("/upload", upload.single("file"), uploadMedia);

module.exports = router;