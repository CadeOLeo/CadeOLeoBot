/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.cadeOLeoVer = function cadeOLeoVer (req, res) {
  const CadeOLeo = require("./cadeoleo.js");

  var date1, date2;
  var leoBirthday = new Date('2015-10-22');
  var today = new Date(Date.UTC(
    (new Date()).getUTCFullYear(),
    (new Date()).getUTCMonth(),
    (new Date()).getUTCDate()
  ));
  var vLeo = false;
  var vToday = false;

  date1 = new Date(req.query.date1);
  date2 = new Date(req.query.date2);

  if (
    isNaN(date1.getTime())
    && isNaN(date2.getTime())
  ) {
    date1 = leoBirthday;
    date2 = today;
    vLeo = true;
    vToday = true;
  } else if (isNaN(date1.getTime()) ) {
    date1 = today;
    vToday = true;
  } else if (isNaN(date2.getTime()) ) {
    date2 = today;
    vToday = true;
  }
  
  var v = CadeOLeo.Ver.v(date1, date2);

  res.send(
    {
      "version": v,
      "date1": date1,
      "date2": date2,
      "vLeo": vLeo,
      "vToday": vToday
    }
  );
  res.status(200).end();
};
