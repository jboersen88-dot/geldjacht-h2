/* Onthulvolgorde per foto: [x, y, breedte, hoogte] in vakjes van 100 px.
   Staande foto's zijn 12 x 16 vakjes (1200 x 1600), liggende 16 x 12 (1600 x 1200).
   shortcut: standaard raster van 4 x 4 tegels in een vaste willekeurige volgorde per foto; eventueel later
   een eigen volgorde (herkenbare delen als laatste). */
var STAAND = { 2: true, 3: true, 4: true, 5: true, 6: true, 7: true };
var AANTAL_FOTOS = 7;
function maat(f) { return STAAND[f] ? [12, 16] : [16, 12]; }
var FOTOS = (function () {
  var r = {};
  for (var f = 1; f <= AANTAL_FOTOS; f++) {
    var m = maat(f), bw = m[0] / 4, bh = m[1] / 4, t = [], s = f * 9301;
    for (var x = 0; x < 4; x++) for (var y = 0; y < 4; y++) t.push([x * bw, y * bh, bw, bh]);
    for (var i = t.length - 1; i > 0; i--) { s = (s * 49297 + 233280) % 233280; var j = Math.floor(s / 233280 * (i + 1)), h = t[i]; t[i] = t[j]; t[j] = h; }
    t.push([0, 0, m[0], m[1]]); r[f] = t;
  }
  return r;
})();
