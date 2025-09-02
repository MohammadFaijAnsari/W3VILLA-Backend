const {DataTypes}=require('sequelize');
const sequelize=require('../config/db.js');
const Task=sequelize.define({
    id:{
        type:DataTypes.INET,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allownull:false
    },
    desc:{
        type:DataTypes.STRING,
        allownull:false
    }
});

module.export=Task;