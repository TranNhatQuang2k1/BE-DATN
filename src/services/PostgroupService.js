const db= require('../models');
const { Op, where } = require('sequelize');
const { QueryTypes } = require('sequelize');
const { raw } = require('express');

let addPostgroup = async (data) =>{
    return new Promise( async (resolve, reject)=>{
        try {
            const post= await db.Postgroup.create(
                {
                    title: data.title,
                    content: data.content,
                    post_img: data.post_img,
                    group_id: data.group_id,
                    member_id: data.member_id
                }
            );

            resolve({
                errCode:0,
                message:post
            })
        } catch (e) {
            reject(e)
        }
    });
}


let deletePostgroup = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            resData= {}
            let post= await db.Postgroup.findOne({
                where:{
                    id: data.id
                }
            });

            if( !post){
                    resData.errCode= 2,
                    resData.message='mã post không tồn tại'
            } else{
                await post.destroy();

                resData.errCode= 0,
                resData.message='xóa post thành công'
            }
            
           resolve(resData)

        } catch (err) {
            reject(err)
        }
    })
}

let updatePostgroup = (param,data) => {
    return new Promise(async(resolve, reject) => {
        let resData = {};
        try{
            let post = await db.Postgroup.findByPk(param.id);
            if(post) {
                await db.Postgroup.update({
                    title: data.title,
                    content: data.content,
                    post_img: data.post_img,
                    group_id: data.group_id,
                    member_id: data.member_id
                },
                {
                    where:{
                        id: post.id
                    }
                } )
                let spe = await db.Postgroup.findByPk(param.id);
                resData.errCode = 0;
                resData.errMessage = spe
            }
            else {
                resData.errCode = 2;
                resData.errMessage = "mã post không tồn tại"
            }
            resolve(resData)
        } catch(e){
            reject(e);
        }
    });
}


module.exports= {
    addPostgroup,
    deletePostgroup,
    updatePostgroup,
}