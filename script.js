// Mostrar/esconder botão voltar ao topo ao rolar a página
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

// Mensagem de confirmação no envio do formulário
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();

  // Limpa os campos do formulário
  this.reset();

  // Mostra mensagem de confirmação
  alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
});