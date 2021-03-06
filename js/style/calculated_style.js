'use strict';

var reference = require('./reference');

module.exports = {};

reference['class'].forEach(function(className) {
    var Calculated = function() {};
    var style = reference[className];
    for (var prop in style) {
        if (style[prop]['default'] === undefined) continue;
        Calculated.prototype[prop] = style[prop]['default'];
    }
    Calculated.prototype.hidden = false;
    module.exports[className.replace('class_','')] = Calculated;
});

