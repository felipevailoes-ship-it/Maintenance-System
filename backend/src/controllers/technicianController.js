const technicianService = require("../services/technicianService");

// Valida e organiza os dados do corpo da requisição.
// Devolve { data } quando está tudo certo ou { error } com a mensagem do problema.
function parseTechnicianBody(body) {
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const specialty = String(body.specialty || "").trim();

    // e-mail sempre em minúsculas, para "Joao@x.com" e "joao@x.com" não virarem dois cadastros
    const email = String(body.email || "").trim().toLowerCase();

    if (!name) return { error: "O nome do técnico é obrigatório." };

    // telefone: precisa ter pelo menos DDD + número (10 dígitos), ignorando máscara
    if (phone.replace(/\D/g, "").length < 10) {
        return { error: "Telefone inválido. Informe o DDD e o número." };
    }

    // validação simples de formato: algo@algo.algo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: "E-mail inválido." };
    }

    if (!specialty) return { error: "A especialidade é obrigatória." };

    return { data: { name, phone, email, specialty } };
}

async function getAllTechnicians(req, res) {
    try {
        const technicians = await technicianService.getAllTechnicians();
        res.json(technicians);
    } catch (error) {
        console.error("Erro ao buscar técnicos: ", error);
        res.status(500).json({ message: "Erro ao buscar técnicos." });
    }
}

async function getTechnicianById(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        const technician = await technicianService.getTechnicianById(id);

        if (!technician) {
            return res.status(404).json({ message: "Técnico não encontrado." });
        }

        res.json(technician);
    } catch (error) {
        console.error("Erro ao buscar técnico: ", error);
        res.status(500).json({ message: "Erro ao buscar técnico." });
    }
}

async function createTechnician(req, res) {
    try {
        const { data, error } = parseTechnicianBody(req.body);

        if (error) {
            return res.status(400).json({ message: error });
        }

        const technician = await technicianService.createTechnician(data);

        res.status(201).json(technician);
    } catch (error) {
        // email é @unique no schema
        if (error.code === "P2002") {
            return res.status(409).json({ message: "Já existe um técnico com esse e-mail." });
        }

        console.error("Erro ao criar técnico: ", error);
        res.status(500).json({ message: "Erro ao criar técnico." });
    }
}

async function updateTechnician(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        const { data, error } = parseTechnicianBody(req.body);

        if (error) {
            return res.status(400).json({ message: error });
        }

        const technician = await technicianService.updateTechnician(id, data);

        res.json(technician);
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Técnico não encontrado." });
        }

        if (error.code === "P2002") {
            return res.status(409).json({ message: "Já existe um técnico com esse e-mail." });
        }

        console.error("Erro ao atualizar técnico: ", error);
        res.status(500).json({ message: "Erro ao atualizar técnico." });
    }
}

async function deleteTechnician(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        await technicianService.deleteTechnician(id);

        res.status(204).send();
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Técnico não encontrado." });
        }

        // P2003 = ainda existem ordens de serviço deste técnico
        if (error.code === "P2003") {
            return res.status(409).json({
                message: "Não é possível excluir: existem ordens de serviço vinculadas a este técnico.",
            });
        }

        console.error("Erro ao excluir técnico: ", error);
        res.status(500).json({ message: "Erro ao excluir técnico." });
    }
}

module.exports = {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
};