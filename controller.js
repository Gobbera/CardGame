const container = document.getElementById('container');
const menu = document.getElementById('menu');
const returnMenuButton = document.getElementById('back-to-menu');
const playButton = document.getElementById('play-button');
const rulesButton = document.getElementById('rules-button');
const nicknameTag = document.getElementById('nickname-tag');
const nicknameInput = document.getElementById('nickname-input');
const rulesText = document.getElementById('rules-text');
const returnButton = document.getElementById('return-button');
rulesText.hidden = true;
returnButton.hidden = true;
returnMenuButton.hidden = true;

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