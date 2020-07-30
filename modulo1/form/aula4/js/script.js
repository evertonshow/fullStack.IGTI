window.addEventListener("load", start);
var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var nameInput = document.querySelector("#nameInput");
  alert(`${nameInput.value} cadastrado com sucesso`);
});
function start() {
  var nameInput = document.querySelector("#nameInput");
  nameInput.addEventListener("keyup", countName);
}
function countName(e) {
  var count = e.target.value;
  var span = document.querySelector("#nameLength");
  span.textContent = count.length;
}
