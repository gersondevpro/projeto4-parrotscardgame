// Pergunta Inicial do jogo
let iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");

// Condição para iniciar o jogo 01
while (iniciarJogo < 4 || iniciarJogo > 14) {
    alert(`Escolha entre 4 e 14 cartas!`);
    iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");
}

// Condição para iniciar o jogo 02
while (iniciarJogo % 2 !== 0) {
    alert("O número de cartas deve ser um número par.");
    iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");
}

// cartas do baralho em uma array
let baralho = [
    '<img src="/arquivosUteis/fiestaparrot.gif" class="fiesta" alt="">',
    '<img src="/arquivosUteis/fiestaparrot.gif" class="fiesta" alt="">',
    '<img src="/arquivosUteis/bobrossparrot.gif" class="bobross" alt="">',
    '<img src="/arquivosUteis/bobrossparrot.gif" class="bobross" alt="">',
    '<img src="/arquivosUteis/explodyparrot.gif" alt="">',
    '<img src="/arquivosUteis/explodyparrot.gif" alt="">',
    '<img src="/arquivosUteis/metalparrot.gif" alt="">',
    '<img src="/arquivosUteis/metalparrot.gif" alt="">',
    '<img src="/arquivosUteis/revertitparrot.gif" alt="">',
    '<img src="/arquivosUteis/revertitparrot.gif" alt="">',
    '<img src="/arquivosUteis/tripletsparrot.gif" alt="">',
    '<img src="/arquivosUteis/tripletsparrot.gif" alt="">',
    '<img src="/arquivosUteis/unicornparrot.gif" alt="">',
    '<img src="/arquivosUteis/unicornparrot.gif" alt="">'
];

// Função para embaralhar as cartas e colocar no jogo
let baralhoCortado = baralho.slice(0,iniciarJogo);
baralhoCortado.sort(comparador);

function comparador() { 
    return Math.random() - 0.5; 
}

// Função para adicionar cada carta no jogo
function start() {
    const cartasNaMesa = document.querySelector('.listaCartas');

    for(i=0; i < baralhoCortado.length; i++) {
        cartasNaMesa.innerHTML += `
        <li class="itemCarta" onclick="virarCarta(this)">
            <div class="cartaIndividual">
                <div class="frenteCarta">
                    <img src="/arquivosUteis/front.png" alt="">
                </div>
                <div class="versoCarta">
                    ${baralhoCortado[i]}
                </div>
            </div>
        </li>
    `;
    }
} 

start(iniciarJogo);

// Variáveis globais das cartas escolhidas e contador de jogadas
let contador = 0;
let primeiraCarta = "";
let segundaCarta = "";

// Função que avalia se todas as cartas já estão viradas e finaliza o jogo
function fimDeJogo() {
    const validarFim = document.querySelectorAll(".girar");

    if (validarFim.length === baralhoCortado.length) {
        alert(`Você ganhou em ${contador} jogadas!`)
    };
}

// Função para conferir a igualdade das cartas
function conferirIgualdade() {

    let firstCard = primeiraCarta.innerHTML;
    let secondCard = segundaCarta.innerHTML;
    console.log(firstCard);
    console.log(secondCard);

    if (firstCard === secondCard) {
        
        primeiraCarta = "";
        segundaCarta = "";
        fimDeJogo();

    } else {
        setTimeout(() => {

        primeiraCarta.classList.remove("girar");
        segundaCarta.classList.remove("girar");

        primeiraCarta = "";
        segundaCarta = "";

        }, 1000);
    }
}

// função para virar cada PAR de cartas
function virarCarta(cartaEscolhida) {

    if(cartaEscolhida.className.includes("girar")) {
        return;
    }

    if (primeiraCarta === "") {
        cartaEscolhida.classList.add("girar");
        primeiraCarta = cartaEscolhida;
        contador ++;
    } else if (segundaCarta === "") {
        cartaEscolhida.classList.add("girar");
        segundaCarta = cartaEscolhida;
        contador ++;
        conferirIgualdade()
    }
}
