window.addEventListener("load", async () => {
  mapElements();
  await fetchUsers();
  eventInput();
});

function mapElements() {
  inputSearch = document.querySelector("#inputFilter");
  buttonFilter = document.querySelector("#buttonFilter");
  resultUser = document.querySelector("#resultUser");
  resultStastics = document.querySelector("#resultStastics");
  spinner = document.querySelector("#spinner");
  iteracion = document.querySelector("#iteracion");
}
//função que busca a api e no map pega os elementos preciso
async function fetchUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  users = json.results
    .map(({ login, name, picture, dob, gender }) => {
      //colocando o nome e o sobrenome em uma const
      const nameFull = `${name.first} ${name.last}`;
      return {
        userLogin: login.uuid,
        userName: nameFull,
        userLowercase: nameFull.toLocaleLowerCase(), //colocando os nomes em minusculo
        userPicture: picture.large,
        userDob: dob.age,
        userGender: gender,
      };
    })
    .sort((a, b) => a.userName.localeCompare(b.userName));
  showIteracion();
}
//remove o spinner
function showIteracion() {
  setInterval(() => {
    spinner.classList.add("hidden");
    iteracion.classList.remove("hidden");
  }, 1000);
}
//função aonde vai pega os dados para usuarios
function eventInput() {
  inputSearch.addEventListener("keyup", (e) => {
    const currentKey = e.key;
    if (currentKey !== "Enter") return;

    //limpando os espaços e verificando se foi digitado
    const text = e.target.value;
    if (text.trim() !== "") {
      return filterUsers(text);
    }
  });
}
//vai filtrar os usuarios
function filterUsers(text) {
  const filteredUserLowercase = text.toLocaleLowerCase();
  const filteredUsers = users.filter((user) => {
    return user.userLowercase.includes(filteredUserLowercase);
  });
  render(filteredUsers);
  renderStastics(filteredUsers);
}
//parametro do filteredUsers mas declarei com outro nome o parametro
function render(users) {
  resultUser.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = ` ${users.length} usuàrio(s) encontrado(s) .`;

  const ul = document.createElement("ul");
  users.map((user) => {
    const li = document.createElement("li");
    li.classList.add("flex-row");

    const img = `<img class='img' src='${user.userPicture}' alt='${user.userName}'/>`;
    const userList = `<span> ${user.userName} ${user.userDob} anos.</span> `;
    li.innerHTML = ` ${img} ${userList}`;
    ul.appendChild(li);
  });

  resultUser.append(h2);
  resultUser.append(ul);
  resultUser.classList.add("all");
}
function renderStastics(users) {
  const countMale = users.filter((u) => u.userGender === "male").length;
  const countFemale = users.filter((u) => u.userGender === "female").length;
  const countAge = users.reduce((acc, cur) => {
    return acc + cur.userDob;
  }, 0);
  const every = countAge / users.length || 0;
  resultStastics.classList.add("all");
  resultStastics.innerHTML = `
  <ul>
  <li> sexo masculino : <strong>${countMale}</strong></li>
  <li> sexo feminino : <strong>${countFemale}</strong></li>
  <li> soma das idades : <strong>${formaterNumber(countAge)}</strong></li>
  <li> media das idades : <strong>${every.toFixed(2)}</strong></li>
  </ul>
  `;
}
function formaterNumber(number) {
  const formatted = Intl.NumberFormat("pt-BR");
  return formatted.format(number);
}
