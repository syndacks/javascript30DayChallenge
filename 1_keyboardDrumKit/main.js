function removeTransition(e){
  if(e.propertyName!=='transform') return;
  e.target.classList.remove('playing');
}

function playSound(e){
  const audio = $(`audio[data-key="${e.keyCode}"]`);
  const key = $(`.key[data-key="${e.keyCode}"]`);
  if (!audio[0]) return;
  key.addClass('playing');
  audio[0].currentTime = 0; //rewind to start
  audio[0].play();
}

const keys = Array.from($('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
$(window).on('keydown', playSound);



// // vanilla Javascript (no jQuery!)
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }
//
// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);
