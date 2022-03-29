const principal = document.getElementById('principal')
const principalTextos = document.getElementById('principalTextos')
const btnIniciar = document.getElementById('btnIniciar')
const quadrante1 = document.getElementById('quadrante1')
const quadrante2 = document.getElementById('quadrante2')
const quadrante3 = document.getElementById('quadrante3')
const quadrante4 = document.getElementById('quadrante4')
const quadrantes = [quadrante1, quadrante2, quadrante3, quadrante4];
let jogoMaquina;
let jogoUsuario;

btnIniciar.addEventListener('click', iniciarGame)

function iniciarGame() {
  
  let sequencia = [];
  setTimeout(() => {principalTextos.innerText = 'Preste atenção à sequência';
    setTimeout(() => {principalTextos.innerText = 'Seu jogo começara em';
      setTimeout(() => {principalTextos.innerText = '3';
        setTimeout(() => {principalTextos.innerText = '2';
        setTimeout(() => {principalTextos.innerText = '1'}, 1000)
        }, 1000)
      }, 1000)
    }, 1200)
  }, 1500)
  
  
  
  
}
  /*jogoMaquina = [];
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
    percorre o jogoMaquina e adiciona e remove classe 
    com os tempos e intervalos setados
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
  
    compara jogoMaquina com jogoUsuario e retorna valor booleano
      se for true
        mostra mensagem de acerto
        adiciona 1 ao contadorPontuacao
        chama a função novaRodada
      senão
        mostra mensagem de erro
        mostra contadorPontuacao como a pontuação total
        mostra botão iniciarGame com texto mudado para Tentar novamente
  
}
*/