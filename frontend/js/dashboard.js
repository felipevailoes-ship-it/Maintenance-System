console.log("não sobra nada");


const systemName ="Sistema de controle de manutenção";

let activeEquipaments = 48;
let maintenanceEquipments = 5;
let preventiveMaintenance = 10;

console.log("Nome do sistema: " +systemName);
console.log("Quantidade de equipamentos ativos " +activeEquipaments);

const equipments = [
    { id:1,
    name:"Compressor",
    local: "Oficina",
    status:true,
    patrimony:"12-pp"
},{ id:2,
    name:"Torno",
    local: "Oficina",
    status:true,
    patrimony:"1-pp"
},{id:3,
    name:"Gerador",
    local: "Casa de máquinas",
    status:true,
    patrimony:"65-pp"
}];


console.table(equipments);


const activesTotal = document.querySelector("#activesTotal");
console.log("activeTotal: "+ activesTotal.textContent);
activesTotal.textContent = 50; 