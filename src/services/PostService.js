const db= require('../models');
const { Op, where } = require('sequelize');
const { QueryTypes } = require('sequelize');
const { raw } = require('express');

let addPost = async (data) =>{
    return new Promise( async (resolve, reject)=>{
        try {
            const post= await db.Post.create(
                {
                    title: data.title,
                    content: data.content,
                    post_img: data.post_img,
                    category_id: data.category_id,
                    toolheath_id: data.toolheath_id,

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


let deletePost = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            resData= {}
            let post= await db.Post.findOne({
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

let updatePost = (param,data) => {
    return new Promise(async(resolve, reject) => {
        let resData = {};
        try{
            let post = await db.Post.findByPk(param.id);
            if(post) {
                await db.Postgroup.update({
                    title: data.title,
                    content: data.content,
                    post_img: data.post_img,
                    category_id: data.category_id,
                    toolheath_id: data.toolheath_id,
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
    addPost,
    deletePost,
    updatePost,
}