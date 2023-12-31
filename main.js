function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    let key;
    if (e.code === 'KeyS' || e.code === 'KeyD') {
        key = document.getElementById('shime_left');
    } else if (e.code === 'KeyF'|| e.code === 'KeyG') {
        key = document.getElementById('okedo');
    }  else if (e.code === 'KeyH'|| e.code === 'KeyJ') {
        key = document.getElementById('shime_right');
    } 
    if (!audio) return;
    if(!key) return;
    key.classList.add('playing');
    if (!audio.paused) {
        audio.currentTime = 0; // Restart the sound if it's already playing
    } else {
        audio.currentTime = 0;
        audio.play();
    }
  }

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);