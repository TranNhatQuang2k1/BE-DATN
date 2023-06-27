const express= require('express')
const router=express.Router()

const groupController = require('../controller/GroupController');
const { uploadCloudGroup } = require('../config/cloudinary.config');
const authJwt = require('../middlewares/authJwt')


router.post('',authJwt.authenToken, authJwt.isAdmin,uploadCloudGroup.single('img_bg'),uploadCloudGroup.single('avartar_group'),groupController.addGroup);
router.put('/:id',authJwt.authenToken, authJwt.isAdmin,uploadCloudGroup.single('img_bg'),uploadCloudGroup.single('avartar_group'),groupController.updateGroup);
router.get('',groupController.getListGroup);
router.get('/:id',groupController.getGroupById);
router.delete('/:id',authJwt.authenToken, authJwt.isAdmin,groupController.deleteGroup);

module.exports = router;