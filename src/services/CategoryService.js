const db= require('../models');
const { Op, where } = require('sequelize');
const { QueryTypes,sequelize } = require('sequelize');
const { raw } = require('express');

let addCategory = async (data) =>{
    console.log(data)
    return new Promise( async (resolve, reject)=>{
        try {
            const category= await db.Category.create(
                {
                    name: 'Tâm lý-Tâm thần',
                    description: 'Nhiều vấn đề về tâm lý - tâm thần nghiêm trọng có thể không được phát hiện sớm. Biết cách duy trì tinh thần khỏe mạnh và cách nhận biết yếu tố nguy cơ, dấu hiệu bệnh tâm lý sẽ hữu ích cho bạn và người thân.',
                    image: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/02/Healthy-Mind-2.png',
                }
            );

            resolve({
                errCode:0,
                message:category
            })
        } catch (e) {
            reject(e)
            console.log(e)
        }
    });
}

let getListCategory = async (key) => {
    return new Promise(async(resolve, reject) => {
        
        try {
            let category = await db.Category.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
            });
              
              if (category.length > 0) {
                resolve({
                  errCode: 0,
                  message: category
                });
              } else {
                resolve({
                  errCode: 2,
                  message: 'Id category không tồn tại'
                });
              }

        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

let deleteCategory = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            resData= {}
            let category= await db.Category.findOne({
                where:{
                    id: data.id
                }
            });

            if( !category){
                    resData.errCode= 2,
                    resData.message='mã Category không tồn tại'
            } else{
                await category.destroy();

                resData.errCode= 0,
                resData.message='xóa Category thành công'
            }
            
           resolve(resData)

        } catch (err) {
            reject(err)
        }
    })
}

let updateCategory = (param,data) => {
    return new Promise(async(resolve, reject) => {
        let resData = {};
        try{
            let category = await db.Category.findByPk(param.id);
            if(category) {
                await db.Category.update({
                    name: data.name,
                    description: data.description,
                    image: data.image,
                },
                {
                    where:{
                        id: category.id
                    }
                } )
                let spe = await db.Category.findByPk(param.id);
                resData.errCode = 0;
                resData.errMessage = spe
            }
            else {
                resData.errCode = 2;
                resData.errMessage = "mã Category không tồn tại"
            }
            resolve(resData)
        } catch(e){
            reject(e);
        }
    });
}

let getCategoryById = async (data) => 
{
    return new Promise(async(resolve, reject) => {
        try {
            let category = await db.Category.findOne({
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
                where: {
                  id: data.id
                },
                include: [
                  {
                    model: db.Post,
                    require: true,
                    as: 'posts',
                    attributes: {
                        exclude: ['updatedAt']
                    },
                    // include: [
                    //   {
                    //     model: db.Doctor,
                    //     required: true,
                    //     as: 'members',
                    //     attributes: {
                    //         exclude: ['createdAt', 'updatedAt']
                    //     },
                    //     include: [
                    //       {
                    //         model: db.User,
                    //         required: true,
                    //         as: 'memberUser',
                    //         attributes: [
                    //           'id', 'name', 'image'
                    //         ],
                    //         where: { status: 1 }
                    //       }
                    //     ]
                    //   }
                    // ]
                  }
                  ,
                ]
              });
              
              

            
              

            if(category){
                resolve({
                    errCode:0,
                    message: category
                })
            } else {
                resolve({
                    errCode:2,
                    message: "id chuyên khoa không tồn tại"
                })
            }

        } catch (err) {
            reject(err)
        }
    })
}

module.exports= {
    addCategory,
    getListCategory,
    deleteCategory,
    updateCategory,
    getCategoryById
}