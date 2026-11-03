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

async function createCategory(req, res) {
  try {
    // os dados vêm do CORPO da requisição (graças ao express.json())
    // "desestruturação": tira name e description de dentro do req.body
    const { name, description } = req.body;

    // validação: sem nome (ou só espaços) não dá para criar
    // 400 = pedido mal feito pelo cliente; o return para a função aqui
    if (!name || !name.trim()) {
      return res.status(400).json({ message: "O nome da categoria é obrigatório." });
    }

    // pede para o service gravar no banco
    // trim() tira espaços sobrando no começo e no fim
    const category = await categoryService.createCategory({
      name: name.trim(),
      description, // opcional: se não vier, fica vazio no banco
    });

    // 201 = criado com sucesso; devolve a categoria nova (já com id)
    res.status(201).json(category);
  } catch (error) {
    // resposta do desafio: name é @unique no schema,
    // então o Prisma recusa nome repetido com o código P2002
    // 409 = conflito com algo que já existe
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Já existe uma categoria com esse nome." });
    }

    console.error("Erro ao criar categoria: ", error);
    res.status(500).json({ message: "Erro ao criar categoria." });
  }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
};

