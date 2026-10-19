// busca o arquivo no menu da pages
fetch("../sidebar.html") // o fetch não entrega o arquivo na hora, ele devolve uma promessa de que vai entregar.
  .then((response) => response.text()) // o response é uma caixa que chega com várias informações e o text abra a caixa e tira o conteúdo dela como texto
  .then((html) => {
    document.getElementById("sidebar").innerHTML = html; // utiliza do id sidebar para buscar incluir o conteúdo da caixa que veio do sidebar.html
  })
  .catch((error) => {
    console.error("Erro ao carregar o menu lateral:", error); // mostra no console se algo falhar
  });