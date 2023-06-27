const { json } = require('sequelize');
const PostgroupService = require('../services/PostgroupService')

let addPostgroup = async (req,res) =>{
    if (!req.body.title || !req.body.content || !req.body.group_id ||  !req.body.member_id ) {
        return res.status(400).json({
            erroCode:1,
            message:'nhập đầy đủ thông tin'
        })
    }
    if (!req.file){
        req.body.post_img='0';
    } else{
        req.body.post_img=req.file.path;
    }

    let resData = await PostgroupService.addPostgroup(req.body)

    return res.status(200).json(resData)

}

let getListPostgroup = async (req,res)=> {
    let key;
    if( req.query.key === undefined){
        key = ''
    } else{
        key= req.query.key
    }
    let resData = await groupService.getListGroup(key)
    return res.status(200).json(resData)
}

let deletePostgroup = async (req,res) => {
    let resData = await PostgroupService.deletePostgroup(req.params)
    return res.status(200).json(resData)
}

let updatePostgroup = async (req,res) => {
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

    let resData = await PostgroupService.updatePostgroup(req.params,req.body)
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


module.exports= {
    addPostgroup,
    getListPostgroup,
    deletePostgroup,
    updatePostgroup,
}