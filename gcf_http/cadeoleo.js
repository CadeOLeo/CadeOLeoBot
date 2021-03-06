var moment = require("moment")
var momentPreciseRangePlugin = require("moment-precise-range-plugin")

var CadeOLeo = CadeOLeo || {};

CadeOLeo.Ver = (function() {

    function v(dateStart, dateEnd) {
        var a = moment.utc(dateEnd);
        var b = moment.utc(dateStart);
        var c = moment.preciseDiff(a, b, true);

        if (c === '') {
            years  = 0;
            months = 0;
            days   = 0;
        } else {
            years  = c.years;
            months = c.months;
            days   = c.days;
        }

        

        return 'v' + years + '.' + months + '.' + days;
    }

    return {
        v: v
    };

})();

module.exports = CadeOLeo;
