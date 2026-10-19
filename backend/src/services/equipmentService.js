const prisma = require("../database/prisma");

async function getAllEquipments(){
    return await prisma.equipment.findMany({
        orderBy:{id: "desc"}
    });
};

async function getEquipmentById(id){
    return await prisma.equipment.findUnique({
        where:{id}
    });
};

async function createEquipment(data){
    return await prisma.equipment.create({
        data
    });
};

async function updateEquipment(id,data){
    return await prisma.equipment.update({
        where:{id},
        data
    });
};

async function deleteEquipment(id){
    return await prisma.equipment.delete({
        where:{id}
    });
};

module.exports ={
    getAllEquipments,
    createEquipment,
    updateEquipment,
    deleteEquipment,
    getEquipmentById
};