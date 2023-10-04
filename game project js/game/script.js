let chara = document.getElementById('chara');
let charaBottom = parseInt(window.getComputedStyle(chara).getPropertyValue
    ('bottom'));
let charaRight = parseInt(window.getComputedStyle(chara).getPropertyValue
    ('right'));
let charaWidth = parseInt(window.getComputedStyle(chara).getPropertyValue
    ('width'));
let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue
    ('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue
    ('height'));

let isJumping = false;
let Uptime;
let downtime;

function jump() {
    if (isJumping) return;
    Uptime = setInterval(() => {
        charaBottom += 10;
        CharacterData.style.bottom = charaBottom + 'px';
        isJumping = true;
    }, 20);
}
 function control(e){
    if (e.key == 'ArrowUp' || e.key == ''){
        jump();
    }
 }
  document.addEventListener('keydown', control);