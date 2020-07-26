var body = document.body;

var rangeRed = document.querySelector('#rangeRed');
rangeGreen = document.querySelector('#rangeGreen');
rangeBlue = document.querySelector('#rangeBlue');
numberRed = document.getElementById('numberRed');
numberGreen = document.getElementById('numberGreen');
numberBlue = document.getElementById('numberBlue');

res = document.querySelector('#res');

function resolutionColor() {
  // utlizandos as tres maneiras declara as entradas
  var r_hex = parseFloat(rangeRed.value, 10).toString(16),
    g_hex = parseInt(rangeGreen.value, 10).toString(16),
    b_hex = Number(rangeBlue.value, 10).toString(16),
    hex = ` #${pad(r_hex)}${pad(g_hex)}${pad(b_hex)}`
  // hex = ` #${r_hex}${g_hex}${b_hex}`
  // hex = '#' + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex;
  res.value = hex;
  res.style.backgroundColor = hex;
}
function pad(n) {
  return n.length < 2 ? '0' + n : n;
}
// uzando o evento e a target e o com input ja muda no input
rangeRed.addEventListener('input', (e) => {
  resolutionColor();
  colorREd = e.target.value;
  numberRed.value = colorREd;
});
//aqui so pega o valor pois nao precisa do evento, as duas maneiras de fazer
rangeGreen.addEventListener('change', () => {
  resolutionColor();
  numberGreen.value = rangeGreen.value;
});
// no metodo change mudar quando termina o evento.
rangeBlue.addEventListener('change', () => {
  resolutionColor();
  numberBlue.value = rangeBlue.value;
});
//chamando a função ja inicia a pagina renderizada.
resolutionColor();
