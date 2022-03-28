document.addEventListener("DOMContentLoaded", paginaInicial);

const main = document.getElementById("main");
const principal = document.createElement("section");
const principalTextos = document.createElement("p");
const btnIniciar = document.createElement("button");
const quadrante1 = document.createElement("button");
const quadrante2 = document.createElement("button");
const quadrante3 = document.createElement("button");
const quadrante4 = document.createElement("button");
const quadrantes = [quadrante1, quadrante2, quadrante3, quadrante4];
let jogoMaquina;
let jogoUsuario;

function paginaInicial() {
  quadrante1.classList = "quadrante1";
  main.appendChild(quadrante1);

  quadrante2.classList = "quadrante2";
  main.appendChild(quadrante2);

  main.appendChild(principal);

  principalTextos.innerText = "Clique no botão para iniciar o jogo!";
  principal.appendChild(principalTextos);

  btnIniciar.innerText = "INICIAR";
  btnIniciar.addEventListener("click", iniciarGame);
  principal.appendChild(btnIniciar);

  quadrante3.classList = "quadrante3";
  main.appendChild(quadrante3);

  quadrante4.classList = "quadrante4";
  main.appendChild(quadrante4);
}

function iniciarGame() {
  let sequencia = [];
  /*
  acho que precisa adicionar intervalos pra aparecer certinho, não?
  principalTextos.innerHTML = ''
  principalTextos.innerHTML = 'Seu jogo começara em'
  principalTextos.innerHTML = ''
  principalTextos.innerHTML = '3'
  principalTextos.innerHTML = ''
  principalTextos.innerHTML = '2'
  principalTextos.innerHTML = ''
  principalTextos.innerHTML = '1'
  principalTextos.innerHTML = ''
  */

  jogoMaquina = [];
  let contadorPontuacao = 0;
  principal.removeChild(btnIniciar);
  novaRodada();
}

function novaRodada() {
  jogoUsuario = [];
  let numAleatorio = Math.floor(Math.random() * 4);
  jogoMaquina.push();
  rodadaMaquina();
  rodadaUsuario();
}

function rodadaMaquina() {
  principalTextos.innerText = "Preste atenção à sequência";
  for (let i = 0; i < jogoMaquina.length; i++) {
    /*percorre o jogoMaquina e adiciona e remove classe 
    com os tempos e intervalos setados*/
  }
}

function rodadaUsuario() {
  principalTextos.innerText = `Sua vez 
  Consegue lembrar a sequência?`;
  listenerQuadrante(quadrante1);
  listenerQuadrante(quadrante2);
  listenerQuadrante(quadrante3);
  listenerQuadrante(quadrante4);
}

function listenerQuadrante(quadrante) {
  quadrante.addEventListener("click", () => {
    tentativaUsuario(quadrante);
  });
}

function tentativaUsuario(quadranteClicado) {
  jogoUsuario.push(quadranteClicado);
  if (jogoUsuario.length === jogoMaquina.length) {
    resultadoRodada();
  }
}

function resultadoRodada() {
  /*
    compara jogoMaquina com jogoUsuario e retorna valor booleano
      se for true
        mostra mensagem de acerto
        adiciona 1 ao contadorPontuacao
        chama a função novaRodada
      senão
        mostra mensagem de erro
        mostra contadorPontuacao como a pontuação total
        mostra botão iniciarGame com texto mudado para Tentar novamente
  */
}
