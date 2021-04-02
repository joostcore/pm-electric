var sounds = {}

function preload_sounds() {
    if (sounds[theme] == null) {
        sounds[theme] = {}
        sounds[theme]['theme'] = new Audio("themes/" + theme + "/sounds/theme.mp3")
        sounds[theme]['jump'] = new Audio("themes/" + theme + "/sounds/jump.mp3")
        sounds[theme]['jump_on_enemy'] = new Audio("themes/" + theme + "/sounds/jump_on_enemy.mp3")
        sounds[theme]['coin'] = new Audio("themes/" + theme + "/sounds/coin.mp3")
        sounds[theme]['dead'] = new Audio("themes/" + theme + "/sounds/dead.mp3")
        sounds[theme]['success'] = new Audio("themes/" + theme + "/sounds/success.mp3")
        sounds[theme]['inTheEnd'] = new Audio("themes/" + theme + "/sounds/inTheEnd.mp3")
        sounds[theme]['phone_queue'] = new Audio("themes/" + theme + "/sounds/phone_queue.mp3")
    }
}


function sound_theme() {
    sounds[theme]['theme'].play()
}

function sound_coin() {
    sounds[theme]['coin'].play()
}

function sound_dead() {
    sounds[theme]['dead'].play()
}

function sound_jump() {
    sounds[theme]['jump'].play()
}

function sound_jump_on_enemy() {
    sounds[theme]['jump_on_enemy'].play()
}

function sound_success() {
    sounds[theme]['success'].play()
}

function sound_inTheEnd() {
    sounds[theme]['inTheEnd'].play()
}

function sound_inTheEnd_stop() {
    sounds[theme]['inTheEnd'].pause()
}

function sound_phone_queue() {
    sounds[theme]['phone_queue'].play()
}

function sound_phone_queue_stop() {
    sounds[theme]['phone_queue'].pause()
    sounds[theme]['phone_queue'].currentTime = 0;
    sounds[theme]['coin'].play()
}