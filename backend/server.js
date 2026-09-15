const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get('/dashboard', (req, res) => {
 
    if (req.url === "/dashboard"){
    const indicators = {
            activeEquipaments: 48,
            inMaintenance: 7,
            preventiveMaintenance: 2
        };
    res.writeHead(200, {
         "Content-Type": "application/json"
    });

     res.end(JSON.stringify(indicators));
     return;
    }
});

app.listen(3000);

// const http = require("http");
// const PORT = 3000;
// const server = http.createServer((req,res) => {

//     console.log("Método:", req.method);
//     console.log("URL:", req.url);
//     if (req.url === "/"){
//         res.writeHead(200, {
//             "Context-Type": "text/plain"
//         });
//         res.end("API do sistema de manutenção");
//         return;
//     }

//     if (req.url === "/dashboard"){
//         const indicators = {
//             activeEquipaments: 48,
//             inMaintenance: 7,
//             preventiveMaintenance: 2
//         };
//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         });
//         res.end(JSON.stringify(indicators));
//         return;
//     }
//     res.writeHead(404, {
//         "Context-Type": "text/plain"
//     });

//     res.end("Rota não encontrada!");
// });

// server.listen(PORT, () => {
//     console.log(`Servidor iniciado em http://localhost:${PORT}`);
// });
