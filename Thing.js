var getEmpty = function() { return {} };

// multi-line
var fall = function(time) {
    var pos = 0;
    var velocity = 0;
    var g = 9.8;
    for(var i = 0; i < time; i++) {
        velocity += g;
        pos += velocity;
    }
    return pos;
}

// no args
var rand = function() { return Math.random() }

module.exports = { getEmpty, fall, rand }
