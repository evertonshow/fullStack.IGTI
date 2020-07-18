var body = document.body;

var rangeRed = document.querySelector('#rangeRed');
rangeGreen = document.querySelector('#rangeGreen');
rangeBlue = document.querySelector('#rangeBlue');
numberRed = document.getElementById('numberRed');
numberGreen = document.getElementById('numberGreen');
numberBlue = document.getElementById('numberBlue');

res = document.querySelector('#res');

function resolutionColor() {
  var r_hex = parseInt(rangeRed.value, 10).toString(16),
    g_hex = parseInt(rangeGreen.value, 10).toString(16),
    b_hex = parseInt(rangeBlue.value, 10).toString(16),
    hex = '#' + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex;
  res.value = hex;
  res.style.backgroundColor = hex;
}
function pad(n) {
  return n.length < 2 ? '0' + n : n;
}
rangeRed.addEventListener('input', () => {
  resolutionColor();
  numberRed.value = rangeRed.value;
});
rangeGreen.addEventListener('input', () => {
  resolutionColor();
  numberGreen.value = rangeGreen.value;
});
rangeBlue.addEventListener('input', () => {
  resolutionColor();
  numberBlue.value = rangeBlue.value;
});
resolutionColor();
