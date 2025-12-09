document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

//Parte para quando o usuario digitar algo no input e clicar no botão
document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("#input").value;

    if (song !== "") {
        let songArray = song.split("");
        playComposition(songArray);
    }
});

//Função para tocar o som quando clicar em algumas teclas do teclado
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
        }, 300);
    }
} 

//Função para tocar a composição digitada no input 
function playComposition(songArray) {

    let wait = 0;

    for(let songItem of songArray) {
        setTimeout (() => {
            playSound(`key${songItem}`);
        }  , wait);
        wait += 250;
    }
}