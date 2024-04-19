
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual é o hamburguer mais famoso do mundo?");

    
    if (respostaTime.toLowerCase() === "big mac") {
      alert("Isso mesmo! O BIG MAC é o hamburguer mais famoso do mundo!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Nada disso, comedor de fast food! Tente de novo.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
