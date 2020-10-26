const key = document.getElementsByClassName('key')

document.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // if no audio exists for pressed key, return.
    if (!audio) return;
    // rewind audio to 0 for multiple hits in a row
    audio.currentTime = 0;
    // play the audio
    audio.play();
    // add playing class for the animation
    key.classList.add('playing')
})

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return;
    // remove 'playing' class after css transition end
    key.classList.remove('playing')
}))