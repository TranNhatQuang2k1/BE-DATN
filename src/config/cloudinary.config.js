const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
  cloud_name: 'dhydazsol', 
  api_key: '413399485847644', 
  api_secret: 'T3_wy2hlQARSSJ5YVLFiMdnLPW0' 
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "profiles",
  },
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});
const storagetoolheath = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ToolHeaths",
  },
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});
const storagegroup = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Groups",
  },
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});
const storagepost = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Posts",
  },
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});
const uploadCloud = multer({
    storage: storage,
    limits: { fileSize: '1000000' }, });
// const uploadCloudToolHeath = multer({
//     storage: storagetoolheath,
//     limits: { fileSize: '1000000' }, });
// const uploadCloudGroup = multer({
//       storage: storagegroup,
//       limits: { fileSize: '1000000' }, });
// const uploadCloudPost = multer({
//       storage: storagepost,
//       limits: { fileSize: '1000000' }, });

module.exports = uploadCloud;
// module.exports = uploadCloudToolHeath;
// module.exports = uploadCloudGroup;
// module.exports = uploadCloudPost;
