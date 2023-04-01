const container = document.getElementById('container');
const menu = document.getElementById('menu');
const returnMenuButton = document.getElementById('back-to-menu');
const playButton = document.getElementById('play-button');
const rulesButton = document.getElementById('rules-button');
const nicknameTag = document.getElementById('nickname-tag');
const nicknameInput = document.getElementById('nickname-input');
const rulesText = document.getElementById('rules-text');
const returnButton = document.getElementById('return-button');
const playerName = document.getElementById('player-name');
const playerLife = document.getElementById('player-life');

const player = document.getElementById('player');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');

rulesText.hidden = true;
returnButton.hidden = true;
returnMenuButton.hidden = true;
player.hidden = true;
player2.hidden = true;
player3.hidden = true;
player4.hidden = true;

rulesButton.onclick = function () {
    playButton.classList.add('hide');
    rulesButton.classList.add('hide');
    nicknameTag.classList.add('hide');
    nicknameInput.classList.add('hide');
    setTimeout(function () {
        playButton.hidden = true;
        rulesButton.hidden = true;
        nicknameTag.hidden = true;
        nicknameInput.hidden = true;
        rulesText.hidden = false; 
        returnButton.hidden = false;
        playButton.classList.remove('hide');
        rulesButton.classList.remove('hide');
        nicknameTag.classList.remove('hide');
        nicknameInput.classList.remove('hide');
    }, 900);
}

returnButton.onclick = function () {
    playButton.classList.add('dishide');
    rulesButton.classList.add('dishide');
    nicknameTag.classList.add('dishide');
    nicknameInput.classList.add('dishide');
    playButton.hidden = false;
    rulesButton.hidden = false;
    nicknameTag.hidden = false;
    nicknameInput.hidden = false;
    rulesText.hidden = true; 
    returnButton.hidden = true;
    setTimeout(function () {
        playButton.classList.remove('dishide');
        rulesButton.classList.remove('dishide');
        nicknameTag.classList.remove('dishide');
        nicknameInput.classList.remove('dishide');
    }, 900);
}

playButton.onclick = function () {
    menu.classList.add('hideToPlay');
    returnMenuButton.hidden = false;
    player.hidden = false;
    player2.hidden = false;
    player3.hidden = false;
    player4.hidden = false;
    setTimeout(function () {
        container.removeChild(menu);
        menu.hidden = true;
        menu.classList.remove('hideToPlay');
    }, 900);
}

returnMenuButton.onclick = function () {
    container.appendChild(menu);
    returnMenuButton.hidden = true;
}