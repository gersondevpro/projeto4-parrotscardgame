let iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");

while (iniciarJogo < 4 || iniciarJogo > 14) {
    alert(`Escolha entre 4 e 14 cartas!`);
    iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");
}

while (iniciarJogo % 2 !== 0) {
    alert("O número de cartas deve ser um número par.");
    iniciarJogo = prompt("Bora começar esse jogo! Você quer jogar 'Parrot Card Game' com quantas cartas?");
}

const baralho = [
    '<img src="/arquivosUteis/fiestaparrot.gif" alt="">',
    '<img src="/arquivosUteis/fiestaparrot.gif" alt="">',
    '<img src="/arquivosUteis/bobrossparrot.gif" alt="">',
    '<img src="/arquivosUteis/bobrossparrot.gif" alt="">',
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

console.log(baralho);

function start() {
    const cartasNaMesa = document.querySelector('.listaCartas');

    for(i=0; i < iniciarJogo; i++) {
        cartasNaMesa.innerHTML += `
        <li class="itemCarta" onclick="virarCarta(this)">
            <div class="cartaIndividual">
                <img src="/arquivosUteis/front.png" alt="">
            </div>
        </li>
    `;
    }
}

start();

function virarCarta(cartaEscolhida) {
    console.log(cartaEscolhida);
}

virarCarta();