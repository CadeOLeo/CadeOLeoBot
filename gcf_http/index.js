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
  var today = new Date();
  var vleoToday = false;

  try {
    date1 = new Date(req.query.date1);
    date2 = new Date(req.query.date2);
  } catch(err) {
    console.log(err);
  }

  if (
    isNaN( date1.getTime())
    || isNaN( date2.getTime())
  ) {
    date1 = leoBirthday;
    date2 = today;
    vLeoToday = true;
  }

  var v = CadeOLeo.Ver.v(date1, date2);

  console.log(v);
  res.send({
    "version": v,
    "date1": date1,
    "date2": date2,
    "vLeoToday": true
  });
  res.status(200).end();
};
