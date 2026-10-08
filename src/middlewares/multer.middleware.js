import multer from "multer";
import crypto from "crypto"; // Node.js ka built-in module directly import karein

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err);
      
      // Random bytes ko hex string mein convert karke original naam ke aage laga dein
      // Example: 8f4b...-image.png
      const randomFilename = raw.toString('hex') + '-' + file.originalname;
      cb(null, randomFilename);
    });
  }
});

export const upload = multer({
  storage, 
});