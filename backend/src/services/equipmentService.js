const prisma = require("../database/prisma");

async function getAllEquipments(){
    return await prisma.equipments.findMany({
        orderBy:{id: "desc"}
    });
};

async function getEquipmentById(id){
    return await prisma.equipments.findUnique({
        where:{id}
    });
};

async function createEquipment(data){
    return await prisma.equipments.create({
        data
    });
};

async function updateEquipment(id,data){
    return await prisma.equipments.update({
        where:{id},
        data
    });
};

async function deleteEquipment(id){
    return await prisma.equipments.delete({
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