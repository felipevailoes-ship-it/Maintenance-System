import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js';
import {auth} from "./firebase.js";

const logoutButton = document.querySelector("#logoutButton");
const userInfo = document.querySelector("#userInfo");

onAuthStateChanged(auth, async (user)=> {
    if(!user) {
        window.location.href = "./index.html";
        return;
    }

    userInfor.textContent = `Usuário: ${user.email}`;
});

logoutButton.addEventListener("click", async () =>{
    try {
        await signOut(auth);
        window.location.href = "../../index.html";
    } catch (error) {
        console.error("Falha ao sair:", error.code);
        alert("Não foi possível encerrar a sessão, tente novamente.");
    }
});



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

// function dashboardRefresh() {

//     const actives = equipments.filter(
//         equipment => equipment.status === "true"
//     ).length;

//     const inMaintenance = equipments.filter(
//         equipment => equipment.status === "maintenance"
//     ).length;

//     activesTotal.textContent = actives;
//     maintenanceEquipamentsTotal.textContent = inMaintenance;

//     console.log("Dashboard atualizado");
// }

// dashboardRefresh();

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

async function dashboardLoad (){

    try{
        const response = await fetch("http://localhost:3000/dashboard");
        if(!response.ok){
            throw new Error("Não deu certo!");
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);

        const actives = data.activeEquips;
        const inMaintenance = data.inMaintenance;
        const preventiveEquips = data.preventiveMaintenance; 

        activesTotal.textContent = actives;
        maintenanceEquipamentsTotal.textContent = inMaintenance;
        preventiveTotal.textContent = preventiveEquips;

    }catch(error){
        console.error("Erro ao carregar a dashboard: ", error );
    };
}
dashboardLoad();

async function loadEquipments(){
    try {
        const currentUser = auth.currentUser;

        if (!currentUser) {
            window.location.href = "../index.html";
            return;
        };

        const idToken = await currentUser.getIdToken();

        const response = await fetch(
            "http://localhost:3000/equipments",

            {
                headers: { Authorization: "Bearer &{idToken}"
            }
        }
    );

    if(response.status == 401){
        window.location.href = "./index.html";
        return;
    };

    if(response.ok){
        throw new Error("Falha ao carregar equipamentos.");
    }

    const equipments = await response.json();
    equipmentsTableRender(equipments);
    } catch (error){
        console.error("Erro ao carregar equipamentos:", error);
    }
}
