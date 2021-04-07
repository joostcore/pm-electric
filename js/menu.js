function hideMenus() {
    hideStartMenu()
    hideGameOver()
    hideSuccess()
}

// Main menu

var button;
if (button = document.getElementById("button-play")) {
    button.addEventListener('click', function (event) {
        current_level = levels[1];
        document.getElementById('game').style.backgroundImage = current_level.background;
        document.getElementById('game').style.backgroundSize = '100% 100%';
        document.getElementById('pop-up').style.visibility = 'visible';
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[1];
        load_level()
    }, false);
}
if (button = document.getElementById("button-level_1")) {
    button.addEventListener('click', function (event) {
        current_level = levels[2];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[2];
        load_level()
    }, false);
}
if (button = document.getElementById("button-level_2")) {
    button.addEventListener('click', function (event) {
        current_level = levels[3];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[3];
        load_level()
    }, false);
}
var start_menu = document.getElementById("game-menu");

function showStartMenu() {
    hideControls()
    start_menu.style.visibility = "visible";
}

function hideStartMenu() {
    start_menu.style.visibility = "hidden";
}


// Gameover menu

document.getElementById("button-restart").addEventListener('click', function (event) {
    restartGame();
}, false);

document.getElementById("button-menu").addEventListener('click', function (event) {
    document.getElementById('game').style.backgroundImage = 'none';
    initGame()
    showStartMenu()
}, false);

var gameover_menu = document.getElementById("game-over");
var success_menu = document.getElementById("success");

function showGameOver() {
    hideControls()
    gameover_menu.style.visibility = "visible";
}

function hideGameOver() {
    gameover_menu.style.visibility = "hidden";
}

function showSuccess() {
    hideControls()
    success_menu.style.visibility = "visible";
}

function hideSuccess() {
    success_menu.style.visibility = "hidden";
}
