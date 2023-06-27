const db= require('../models');
const { Op, where } = require('sequelize');
const { QueryTypes,sequelize } = require('sequelize');
const { raw } = require('express');

let addGroup = async (data) =>{
    return new Promise( async (resolve, reject)=>{
        try {
            const group= await db.Group.create(
                {
                    name: data.name,
                    description: data.description,
                    img_bg: data.img_bg,
                    avartar_group: data.avartar_group,
                }
            );

            resolve({
                errCode:0,
                message:group
            })
        } catch (e) {
            reject(e)
        }
    });
}

let getListGroup = async (key) => {
    return new Promise(async(resolve, reject) => {
        
        try {
            let group = await db.Group.findAll({
                attributes: {
                    include: [
                      [
                        db.sequelize.literal('(SELECT COUNT(*) FROM Postgroups WHERE Postgroups.group_id = Group.id)'),
                        'postCount'
                      ],
                      [
                        db.sequelize.literal('(SELECT COUNT(*) FROM Members WHERE Members.group_id = Group.id)'),
                        'memberCount'
                      ],

                    ],
                    exclude: ['createdAt', 'updatedAt']

                  }
                
              });
              
              if (group.length > 0) {
                resolve({
                  errCode: 0,
                  message: group
                });
              } else {
                resolve({
                  errCode: 2,
                  message: 'Id group khoa không tồn tại'
                });
              }

        } catch (err) {
            reject(err)
        }
    })
}

let deleteGroup = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            resData= {}
            let group= await db.Group.findOne({
                where:{
                    id: data.id
                }
            });

            if( !group){
                    resData.errCode= 2,
                    resData.message='mã group không tồn tại'
            } else{
                await group.destroy();

                resData.errCode= 0,
                resData.message='xóa group thành công'
            }
            
           resolve(resData)

        } catch (err) {
            reject(err)
        }
    })
}

let updateGroup = (param,data) => {
    return new Promise(async(resolve, reject) => {
        let resData = {};
        try{
            let group = await db.Group.findByPk(param.id);
            if(group) {
                await db.Group.update({
                    name: data.name,
                    description: data.description,
                    img_bg: data.img_bg,
                    avartar_group: data.avartar_group,
                    // image: data.image !== '0' ? data.image : group.image,
                },
                {
                    where:{
                        id: group.id
                    }
                } )
                let spe = await db.Group.findByPk(param.id);
                resData.errCode = 0;
                resData.errMessage = spe
            }
            else {
                resData.errCode = 2;
                resData.errMessage = "mã group không tồn tại"
            }
            resolve(resData)
        } catch(e){
            reject(e);
        }
    });
}

let getGroupById = async (data) => 
{
    return new Promise(async(resolve, reject) => {
        try {
            let group = await db.Group.findOne({
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
                where: {
                  id: data.id
                },
                include: [
                  {
                    model: db.Postgroup,
                    require: true,
                    as: 'posts',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [
                      {
                        model: db.Member,
                        required: true,
                        as: 'members',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [
                          {
                            model: db.User,
                            required: true,
                            as: 'memberUser',
                            attributes: [
                              'id', 'name', 'image'
                            ],
                            where: { status: 1 }
                          }
                        ]
                      }
                    ]
                  }
                  ,
                  {
                    model: db.Member,
                    required: true,
                    as: 'members',
                    attributes: {
                      exclude: ['createdAt', 'updatedAt']
                    },
                    include: [
                      {
                        model: db.User,
                        required: true,
                        as: 'memberUser',
                        attributes: ['id', 'name', 'image'],
                        where: { status: 1 }
                      }
                    ]
                  }
                ]
              });
              
              

            
              

            if(group){
                resolve({
                    errCode:0,
                    message: group
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
    addGroup,
    getListGroup,
    deleteGroup,
    updateGroup,
    getGroupById
}