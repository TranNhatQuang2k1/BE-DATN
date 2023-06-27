const { json } = require('sequelize');
const groupService = require('../services/GroupService')

let addGroup = async (req,res) =>{
    console.log('aaa')
    if (!req.body.name || !req.body.description  ) {
        return res.status(400).json({
            erroCode:1,
            message:'nhập đầy đủ thông tin'
        })
    }
    if (!req.files || req.files.length < 2) {
        return res.status(400).json({
          erroCode: 1,
          message: 'Vui lòng tải đủ 2 file ảnh',
        });
      } else 
      
      {
        if (!req.files[0] || !req.files[1]) {
          return res.status(400).json({
            erroCode: 1,
            message: 'Vui lòng tải đủ 2 file ảnh',
          });
        }
        req.body.img_bg = req.files[0].path;
        req.body.avartar_group = req.files[1].path;
      }

    let resData = await groupService.addGroup(req.body)

    return res.status(200).json(resData)

}

let getListGroup = async (req,res)=> {
    let key;
    if( req.query.key === undefined){
        key = ''
    } else{
        key= req.query.key
    }
    let resData = await groupService.getListGroup(key)
    return res.status(200).json(resData)
}

let deleteGroup = async (req,res) => {
    let resData = await groupService.deleteGroup(req.params)
    return res.status(200).json(resData)
}

let updateGroup = async (req,res) => {
    if(!req.params) {
        return res.status(200).json({
            errCode: "1",
            errMessage: "Thieu tham so id"
        })
    }

    if (!req.file){
        req.body.image='0';
    } else{
        req.body.image=req.file.path;
    }

    let resData = await groupService.updateGroup(req.params,req.body)
    if(resData.errCode == 2){
        return res.status(404).json({
            errCode:resData.errCode,
            message: resData.errMessage
        })
    } else {
        return res.status(200).json({
            errCode:resData.errCode,
            message: resData.errMessage
        })
    }
}

let getGroupById = async (req,res) =>{
    let response = await groupService.getGroupById(req.params);
    if(response.errCode == 2){
        return res.status(404).json(response)
    } else{
        return res.status(200).json(response)
    }
}

module.exports= {
    addGroup,
    getListGroup,
    deleteGroup,
    updateGroup,
    getGroupById
}