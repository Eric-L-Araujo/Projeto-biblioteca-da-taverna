function salvarNomeUsuario() {
    let user = document.getElementById("nome");
    let userName = user.value.trim();
    
    if (userName === "") {
        alert("Ei, aventureiro(a), você precisa dizer seu nome antes de entrar! ✋");
    } else {
        alert(`${userName}? Quem se chama assim, com cerveja pode entrar aqui.`);
        localStorage.setItem("nome", userName);
        window.location.href = '../html/home.html'; // Redireciona para a página principal
    }
}

function exibirNomeUsuario() {
    let user = localStorage.getItem("nome");
    let result = document.getElementById("result");
    if (user) {
        result.innerHTML = ` ✨ ${user} ✨`;
    } else {
        result.innerHTML = "Visitante!";
    }
}

exibirNomeUsuario();


// function playone() {
//     alert('O taverneiro pigarreia olhando de cara feia para o bardo, como quem diz "Oras, eu to pagando uma diária e você não toca nada? E então, o bardo lhe dá um sorriso sem graça, pega seu bandolim e começa a dedilhar as cordas em busca de inspiração...')
//     let music = document.getElementById("music");
//     if (music.paused) {
//         music.play();
//     }

// }

// function pauseone() {
//     alert('O taverneiro sobe para a biblioteca, distraído com um livro que fala sobre piratas. Nesse momento, o bardo para de tocar, chega até o bar, pega uma caneca e a enche de cerveja preta em um barril de madeira')

//     let music = document.getElementById("music");

//     if (music.play) {
//         music.pause();
//     }
// }