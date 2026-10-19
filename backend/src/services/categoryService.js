const prisma = require("../database/prisma");

async function getAllCategories(){
    return await prisma.category.findMany({
        orderBy:{id: "desc"}
    });
};

async function getCategoryById(id){
    return await prisma.category.findUnique({
        where:{id}
    });
};

async function createCategory(data){
    return await prisma.category.create({
        data
    });
};

async function updateCategory(id,data){
    return await prisma.category.update({
        where:{id},
        data
    });
};

async function deleteCategory(id){
    return await prisma.category.delete({
        where:{id}
    });
};

module.exports ={
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById
};