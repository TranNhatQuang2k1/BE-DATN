const express= require('express')
const router=express.Router()

const categoryController = require('../controller/CategoryController');
const { uploadCloudPost } = require('../config/cloudinary.config');
const authJwt = require('../middlewares/authJwt')


router.post('',categoryController.addCategory);
router.put('/:id',authJwt.authenToken, authJwt.isAdmin,uploadCloudPost.single('image'),categoryController.updateCategory);
router.get('',categoryController.getListCategory);
router.get('/:id',categoryController.getCategoryById);
router.delete('/:id',authJwt.authenToken, authJwt.isAdmin,categoryController.deleteCategory);

module.exports = router;