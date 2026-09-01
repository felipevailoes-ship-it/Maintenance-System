console.log("não sobra nada");


const systemName ="Sistema de controle de manutenção";

let activeEquipaments = 48;
let maintenanceEquipments = 5;
let preventiveMaintenance = 10;
let inMaintenance = 5;

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
const preventiveTotal = document.querySelector("#preventiveTotal");
const maintenanceEquipmentsTotal = document.querySelector("#maintenanceEquipmentsTotal");
const equipmentsTable = document.querySelector("#equipmentsTable");
const searchInput = document.getElementById("searchInput");
const btnNewEquipment = document.getElementById("btnNewEquipment");

console.log("activeTotal: " + activesTotal.textContent);

function dashboardRefresh() {

    const actives = equipments.filter(
        equipment => equipment.status === "true"
    ).length;

    const inMaintenance = equipments.filter(
        equipment => equipment.status === "maintenance"
    ).length;

    activesTotal.textContent = actives;
    maintenanceEquipamentsTotal.textContent = inMaintenance;

    console.log("Dashboard atualizado");
}

dashboardRefresh();

//function equipmentsTableRender(list) {
    //equipmentsTable.innerHTML = "";

    //list.forEach(equipment => {
        //const row = document.createElement("tr");

       // row.innerHTML = `<td>${equipment.name}</td>`

       // equipmentsTable.appenChild(row);
    //});
//};

//equipmentsTableRender(equipments);

//searchInput.addEventListener("input", function () {
    //const term = searchInput.value.toLowerCase();

    //const result = equipments.filter(equipment =>
        //equipment.name.toLowerCase().includes(term));

        //equipmentsTableRender(result);
//});

btnNewEquipment.addEventListener("click", function () {
    console.log("Tá clicante");
});