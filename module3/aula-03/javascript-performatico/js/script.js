window.addEventListener("load", start);

const clickArray = [];

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
  const item = getNewTimestamp();
  clickArray.push(item);

  render(item);
}

function render(itens) {
  const ul = document.querySelector("#data");

  const li = document.createElement("li");
  li.textContent = itens;

  ul.appendChild(li);

  // ul.innerHTML = '';

  // let lis = '';

  // clickArray.map((item) => {
  //   lis += `<li>${item}</li>`;
  // });

  // ul.innerHTML = lis;

  document.title = clickArray.length;
}
