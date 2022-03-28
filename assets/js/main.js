
/* function iniciarGame () {
let sequencia = [ ];
principalTextos.innerHTML = ''
principalTextos.innerHTML = 'Seu jogo começara em'
principalTextos.innerHTML = ''
principalTextos.innerHTML = '3'
principalTextos.innerHTML = ''
principalTextos.innerHTML = '2'
principalTextos.innerHTML = ''
principalTextos.innerHTML = '1'
principalTextos.innerHTML = ''

}
*/

document.addEventListener('DOMContentLoaded', paginaInicial)

function paginaInicial () {
    const main = document.getElementById('main')

    const quadrante1 = document.createElement('button')
    quadrante1.id = 'quadrante1'
    quadrante1.classList = 'quadrante1'
    main.appendChild(quadrante1)

    const quadrante2 = document.createElement('button')
    quadrante2.id = 'quadrante2'
    quadrante2.classList = 'quadrante2'
    main.appendChild(quadrante2)

    const principal = document.createElement('section')
    main.appendChild(principal)

    const principalTextos = document.createElement('p')
    principalTextos.id = 'principalTextos'
    principalTextos.innerText = 'Clique no botão para iniciar o jogo!'
    principal.appendChild(principalTextos)

    const btnIniciar = document.createElement('button')
    btnIniciar.id = 'btnIniciar'
    principal.appendChild(btnIniciar)
    principal.innerText = 'INICIAR'

    const quadrante3 = document.createElement('button')
    quadrante3.id = 'quadrante3'
    quadrante3.classList = 'quadrante3'
    main.appendChild(quadrante3)

    const quadrante4 = document.createElement('button')
    quadrante4.id = 'quadrante4'
    quadrante4.classList = 'quadrante4'
    main.appendChild(quadrante4)
}