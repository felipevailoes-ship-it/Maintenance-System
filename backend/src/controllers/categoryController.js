const categoryService = require ("../services/categoryService");

async function getAllCategories(req,res){
    try{
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    }catch(error) {
        console.error("Erro ao buscar categorias: ", error);
        res.status(500).json({message:"Erro ao buscar categorias."});
    }
}


async function getCategoryById(req, res) {
    try {

        const id = Number(req.params.id); // convertendo para números porque vem como texto
        const category = await categoryService.getCategoryById(id); // se não achou responde 404 não encontrado e para com o return

        if (!category) {
            return res.status(404).json({ message: "Categoria não encontrada."});
        }
        res.json(category); // se achou devolve a categoria status 200
    } catch (error) {
        console.error("Erro ao buscar categoria: ", error);
        res.status(500).json({ message: "Erro ao buscar categoria."});
    }
}

module.exports = {
    getAllCategories,
    getCategoryById
};