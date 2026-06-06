const  multer = require("multer");

const storage = multer.memoryStorage();//This line creates a storage engine for Multer that stores uploaded files in RAM (memory) instead of saving them to disk.


const upload = multer({
    storage,
    limits:{
        fileSize: 50 * 1024 * 1024, // 50mb limit
    },
})

module.exports = upload;