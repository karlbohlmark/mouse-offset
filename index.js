var offset = require('offset');

var getOffset = function(elem, mouseEvent) {
    var offset = elementOffset(elem);
    return {
        x: event.pageX - offset.x,
        y: event.pageY - offset.y
    };
};

module.exports = getOffset;