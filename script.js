const key = document.getElementsByClassName('key')

document.addEventListener("keydown", e=> {
    console.log(e.which)
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
})