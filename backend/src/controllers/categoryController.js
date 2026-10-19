const categoryService = require ("../services/categoryService");

async function getAllCategories(req,res){
    try{
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    }catch(error) {
        console.error("Erro ao buscar categoriass: ", error);
        res.status(500).json({message:"Erro ao buscar categorias."});
    }
}

module.exports = {
    getAllCategories
};
