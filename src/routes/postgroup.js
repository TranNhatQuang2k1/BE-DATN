const express= require('express')
const router=express.Router()

const postgroupController = require('../controller/PostgroupController');
const { uploadCloudPost } = require('../config/cloudinary.config');
const authJwt = require('../middlewares/authJwt')


router.post('',uploadCloudPost.single('post_img'),postgroupController.addPostgroup);
router.put('/:id',authJwt.authenToken,authJwt.isAdminOrUser,uploadCloudPost.single('post_img'),postgroupController.updatePostgroup);
// router.get('',groupController.getGroupById);
// router.get('/:id',groupController.getGroupById);
router.delete('/:id',authJwt.authenToken, authJwt.isAdminOrUser,postgroupController.deletePostgroup);

module.exports = router;