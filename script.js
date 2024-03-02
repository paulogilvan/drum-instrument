document.body.addEventListener("keyup", (e) => {
    playSound(e.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("#input").value;
    
    if(song !== "") {
        let songArray = song.split("");        
        playcomposition(songArray);
    }
});

const playSound = (sound) => {
    let audioEl = document.querySelector(`#s_${sound}`);
    let keyEl = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
    }

    if(keyEl) {
        keyEl.classList.add("active");

        setTimeout(() => {
            keyEl.classList.remove("active");
        }, 300);
    }
}

const playcomposition = (songArray) => {
    let wait = 0;
    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
        
    }
}