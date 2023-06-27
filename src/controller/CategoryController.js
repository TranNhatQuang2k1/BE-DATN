const { json } = require('sequelize');
const categoryService = require('../services/CategoryService')

let addCategory = async (req,res) =>{
    console.log(req.body)
    // if (!req.body.name || !req.body.description) {
    //     return res.status(400).json({
    //         erroCode:1,
    //         message:'nhập đầy đủ thông tin'
    //     })
    // }
    // if (!req.files) {
    //     return res.status(400).json({
    //       erroCode: 1,
    //       message: 'Vui lòng tải file ảnh',
    //     });
    // }
    //     req.body.image = req.files[0].path;

    let resData = await categoryService.addCategory(req.body)

    return res.status(200).json(resData)

}

let getListCategory = async (req,res)=> {
    let key;
    if( req.query.key === undefined){
        key = ''
    } else{
        key= req.query.key
    }
    let resData = await categoryService.getListCategory(key)
    return res.status(200).json(resData)
}

let deleteCategory = async (req,res) => {
    let resData = await categoryService.deleteCategory(req.params)
    return res.status(200).json(resData)
}

let updateCategory = async (req,res) => {
    if(!req.params) {
        return res.status(200).json({
            errCode: "1",
            errMessage: "Thieu tham so id"
        })
    }

    if (!req.file){
        req.body.image='0';
        return res.status(200).json({
            errCode: "1",
            errMessage: "Thieu file ảnh"
        })
    } else{
        req.body.image=req.file.path;
    }

    let resData = await categoryService.updateCategory(req.params,req.body)
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

let getCategoryById = async (req,res) =>{
    let response = await categoryService.getCategoryById(req.params);
    if(response.errCode == 2){
        return res.status(404).json(response)
    } else{
        return res.status(200).json(response)
    }
}

module.exports= {
    addCategory,
    getListCategory,
    deleteCategory,
    updateCategory,
    getCategoryById
}