function playone() {
    alert('O taverneiro pigarreia olhando de cara feia para o bardo, como quem diz "Oras, eu to pagando uma diária e você não toca nada? E então, o bardo lhe dá um sorriso sem graça, pega seu bandolim e começa a dedilhar as cordas em busca de inspiração...')
    let music = document.getElementById("music");
    if (music.paused) {
        music.play();
    }

}

// function username() {
//     let username = prompt('Qual seu nome, aventureiro(a)? ')
//     let result = document.getElementById('result')
//     if (username) {
//     alert(`${username}? Certamente você é novo por aqui...`)
//     result.innerText = `Seja muito bem-vindo(a) à Biblioteca da Taverna, ${username} ! Pegue uma caneca, acomode-se perto do fogo e escolha um tópico do menu acima para começar sua exploração. Mas antes, clique no play para que o bardo embale sua jornada com uma bela melodia.`
//     }
// }

function username() {
    let user = document.getElementById('user'); // Obtém o elemento input
    let userName = user.value.trim(); // Obtém o valor do input e remove espaços extras

    if (userName === "") {
        alert("Ei, aventureiro(a), você precisa dizer seu nome antes de entrar!");
    } else {
        alert(`${userName}? Quem se chama assim, com cerveja pode entrar aqui.`);
        window.location.href = '/index.html'; // Redireciona para a página principal
    }
}

// function username2 () {
//     let result = document.getElementById('result')
//     result.innerText = `O taverneiro te olha entrar e diz: Seja muito bem-vindo(a) à Biblioteca da Taverna, ${user}! Pegue uma caneca, acomode-se perto do fogo e escolha um tópico do menu acima para começar sua exploração. Mas antes, clique no play para que o bardo embale sua jornada com uma bela melodia.`
// }



function pauseone() {
    alert('O taverneiro sobe para a biblioteca, distraído com um livro que fala sobre piratas. Nesse momento, o bardo para de tocar, chega até o bar, pega uma caneca e a enche de cerveja preta em um barril de madeira')

    let music = document.getElementById("music");

    if (music.play) {
        music.pause();
    }
}