// busca o arquivo no menu da pages
fetch("../sidebar.html")
  .then((response) => response.text()) // transforma a resposta em texto que seria o html do menu
  .then((html) => {
    document.getElementById("sidebar").innerHTML = html; // cola o menu dentro do aside vazio
  })
  .catch((error) => {
    console.error("Erro ao carregar o menu lateral:", error); // mostra no console se algo falhar
  });