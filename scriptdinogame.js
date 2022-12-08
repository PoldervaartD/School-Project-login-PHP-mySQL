const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

let jumpsound = new Audio ();
jumpsound.src = "sound/dinogeluid.mp3";

let dood = new Audio ();
dood.src = "sound/doodbenje.mp3"

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {
    jump();
    jumpsound.play();
    }
});

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    
    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

if (rockLeft < 50 && rockLeft >0 && dinoTop >150 ) {
    dood.play();
    alert("Je score is: " + score.innerText +
      "\n\nOpnieuw beginnen?");
      
    location.reload();
    
  }
}, 50);

