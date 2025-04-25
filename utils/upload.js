const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

module.exports = upload;

// I try for firebase integration but i am unable to use firebase because my free trail pack expired
// so i am unable to use firebase.


// const bucket = require("../firebase-config");
// const { v4: uuidv4 } = require("uuid");
// const path = require("path");

// const uploadImage = async (file) => {
//   const { buffer, originalname } = file;
//   const filename = `${uuidv4()}-${originalname}`;
//   const fileRef = bucket.file(filename);

//   await fileRef.save(buffer, {
//     metadata: {
//       contentType: file.mimetype,
//     },
//   });

//   return `https://storage.googleapis.com/${bucket.name}/${filename}`;
// };

// module.exports = uploadImage;


