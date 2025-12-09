document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if (audioElement) {
        audioElement.play();
    }

    if (keyElement) {
        keyElement.currentTime = 0;
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 200);
    }
} //Fazer a parte de input para poder escrever acordes de som e sair o som quando escrever de forma que seja uma sequencia de acordo com o conjunto de palavras