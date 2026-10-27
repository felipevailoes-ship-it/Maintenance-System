const { firebaseAdminAuth } = require ("../firebaseAdmin");

async function authenticateToken(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startwith("Bearer ")) {
        return res.status(401).json({
            message:"Autenticação necessária."
        });
    }
    const idToken = authorization.slice("Bearer ".length);

    try {
        const decodedToken = await firebaseAdminAuth.verifyIdToken(idToken);
        
        req.user = {
            uid: decodedToken.uid,
            email: decodedToken.email
        };
        next();
    } catch(error) {
        console.error("Falha na validação do token: ", error.code);
        return res.status(401).json({
            message: "Sessão inválida ou expirada."
        });
    }
}

module.exports = authenticateToken;