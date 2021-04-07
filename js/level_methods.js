function replaceLevelSpriteXY(x, y, item) {
    line_nr = y / size.tile.target.h - line_offset_y
    replaceLevelSprite(x / size.tile.target.w, line_nr, item)
}

function replaceLevelSprite(pos, line, item) {
    current_level.level[line] = current_level.level[line].replaceAt(pos, item);
}

function getLevelSpriteXY(x, y) {
    line_nr = y / size.tile.target.h - line_offset_y;
    return getLevelSprite(x / size.tile.target.w, line_nr);
}

function getLevelSprite(pos, line) {
    return current_level.level[line].charAt(pos);
}

function getIndicesOf(searchStr, str) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function getLevelSpritePositions(type) {
    var positions = []
    current_level.level.forEach(function (linecontent, pos_y) {
            getIndicesOf(type, linecontent).forEach(function (pos_x) {
                    positions.push({x:pos_x, y:pos_y})
                }
            )
        }
    )
    return positions
}

function getLastLevelSpritePosition(type, x) {
    var pos
    positions = getLevelSpritePositions(type)
    positions.sort(function (a, b) {
        return a.x - b.x
    });
    positions.forEach(function (position) {
        if (!pos || (pos.x < position.x && position.x * size.tile.target.w <= x)) {
            pos = position
        }
    })
    return pos
}

var blocks = {};
blocks['A']={sx:6,sy:1,collide:true,solid:true};
blocks['B']={sx:5,sy:0,collide:true,solid:true};
blocks['C']={sx:6,sy:0,collide:true,solid:true};
blocks['D']={sx:7,sy:1,collide:true,solid:true};
blocks['E']={sx:7,sy:0,collide:true,solid:true};
blocks['F']={sx:5,sy:3,collide:true,type:'exit'};
blocks['G']={sx:7,sy:3,deadly:true,solid:true,type:'enemy_mushroom',speed_x:4};
blocks['H']={sx:10,sy:1,collide:true,solid:true};
blocks['I']={sx:0,sy:5,collide:true,solid:true};
blocks['J']={sx:1,sy:5,collide:true,solid:true};
blocks['K']={sx:12,sy:4,collide:true,type:'respawn'};
blocks['L']={sx:10,sy:3,collide:true,solid:true,type:'block_coin'};
blocks['M']={sx:10,sy:0,collide:true,solid:true};
blocks['N']={sx:9,sy:1,collide:true,solid:true};
blocks['O']={sx:11,sy:1,collide:true,solid:true};
blocks['P']={sx:12,sy:3,collide:true,type:'respawn'};
blocks['Q']={sx:11,sy:4,collide:true,solid:true}
blocks['R']={sx:1,sy:1,collide:true,solid:true};
blocks['S']={sx:0,sy:1,collide:true,solid:true};
blocks['T']={sx:2,sy:1,collide:true,solid:true};
blocks['U']={sx:3,sy:1,collide:true,solid:true};
blocks['V']={sx:8,sy:3,collide:true,solid:true};
blocks['W']={sx:0,sy:0,collide:true,deadly:true};
blocks['X']={sx:1,sy:0,collide:true,deadly:true};
blocks['Y']={sx:2,sy:0,collide:true,deadly:true};
blocks['Z']={sx:3,sy:0,collide:true,deadly:true};

blocks['ß']={sx:11,sy:3,collide:true,solid:true};
blocks['#']={sx:6,sy:3,collide:true,solid:true};
blocks['+']={sx:6,sy:4,collide:true,solid:true};
blocks['-']={sx:6,sy:5,collide:true,solid:true};
blocks['?']={sx:9,sy:3,collide:true,type:'coin'};

blocks['1']={sx:0,sy:3,collide:true,solid:true};
blocks['2']={sx:1,sy:3,collide:true,solid:true};
blocks['3']={sx:2,sy:3,collide:true,solid:true};
blocks['4']={sx:3,sy:3,collide:true,solid:true};
blocks['5']={sx:4,sy:3,collide:true,solid:true};
blocks['6']={sx:1,sy:2,collide:true,solid:true};
blocks['7']={sx:2,sy:2,collide:true,solid:true};
blocks['8']={sx:3,sy:2,collide:true,solid:true};


blocks['a']={sx:0,sy:7,collide:true,solid:true};
blocks['b']={sx:1,sy:7,collide:true,solid:true};
blocks['c']={sx:2,sy:7,collide:true,solid:true};
blocks['d']={sx:3,sy:7,collide:true,solid:true};
blocks['e']={sx:4,sy:7,collide:true,solid:true};
blocks['f']={sx:5,sy:7,collide:true,solid:true};
blocks['g']={sx:6,sy:7,collide:true,solid:true};
blocks['h']={sx:9,sy:10,collide:false};
blocks['i']={sx:9,sy:9,collide:false};
blocks['j']={sx:9,sy:8,collide:false};
blocks['k']={sx:8,sy:8,collide:false};
blocks['l']={sx:7,sy:8,collide:false};
blocks['m']={sx:0,sy:9,collide:false};
blocks['n']={sx:1,sy:9,collide:false};
blocks['o']={sx:10,sy:4,collide:true,solid:true,type:'block_coin_f'};


blocks['r']={sx:10,sy:8,collide:false};
blocks['s']={sx:10,sy:5,collide:true,solid:true};
blocks['t']={sx:8,sy:7,collide:true,solid:true};
blocks['u']={sx:9,sy:7,collide:true,solid:true};
blocks['v']={sx:10,sy:7,collide:true,solid:true};
blocks['w']={sx:8,sy:5,collide:true,solid:true};
blocks['x']={sx:7,sy:9,collide:false};




function loadSingleObjectImage(character){
    initializeTheme();
    let object = getLevelObject(character);
    var block = object
    var canvas = document.createElement('canvas')
    canvas.width = size.tile.target.w
    canvas.height = size.tile.target.h
    canvas.getContext("2d").drawImage(
        spriteMap,
        block.sx * (size.tile.source.w + 1) + 0.5,
        block.sy * (size.tile.source.h + 1) + 0.5,
        size.tile.source.w - 0.8,
        size.tile.source.h - 0.8,
        0,
        0,
        size.tile.target.w,
        size.tile.target.h);
    return canvas.toDataURL("image/png");
}

function getLevelObject(character) {
    var object = blocks[character];
    return object
}

function prerenderLevelObjects() {
    for (char in blocks) {
        var block = blocks[char]
        var canvas = document.createElement('canvas')
        canvas.width = size.tile.target.w
        canvas.height = size.tile.target.h
        canvas.getContext("2d").drawImage(
            spriteMap,
            block.sx * (size.tile.source.w + 1) + 0.5,
            block.sy * (size.tile.source.h + 1) + 0.5,
            size.tile.source.w - 0.8,
            size.tile.source.h - 0.8,
            0,
            0,
            size.tile.target.w,
            size.tile.target.h);
        block.sprite = new Image();
        try {
            block.sprite.src = canvas.toDataURL("image/png");
        }
        catch (err) {
            // image loading fails locally in chromium
        }
    }
}

function countLetter(para, search){
    let i = 0;
    para.forEach(function(object){
        Array.from(object).forEach(function(string){
            console.log(string);
            if(string===search){
                i++;
            }

        })
    });

    return i;
}

Object.prototype.cloneBlock = function () {
    return {sx:this.sx, sy:this.sy, collide:this.collide, deadly:this.deadly,
        solid:this.solid, speed_x:this.speed_x, type:this.type, x:this.x, y:this.y};
};
