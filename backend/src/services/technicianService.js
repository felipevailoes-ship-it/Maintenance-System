const prisma = require("../database/prisma");

async function getAllTechnicians() {
    return await prisma.technician.findMany({
        orderBy: { id: "desc" },
    });
}

async function getTechnicianById(id) {
    return await prisma.technician.findUnique({
        where: { id },
    });
}

async function createTechnician(data) {
    return await prisma.technician.create({
        data,
    });
}

async function updateTechnician(id, data) {
    return await prisma.technician.update({
        where: { id },
        data,
    });
}

async function deleteTechnician(id) {
    return await prisma.technician.delete({
        where: { id },
    });
}

module.exports = {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
};