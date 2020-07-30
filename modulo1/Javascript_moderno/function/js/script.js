window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSpread();
  doRest();
  doDestructuring();
});
//busca e cria outro array com atributo do array
function doMap() {
  const nameEmailArray = people.results.map((item) => {
    return {
      name: item.name,
      email: item.email,
    };
  });
  return nameEmailArray;
}
console.log(doMap());
//buscar dentro do array o objeto no caso de um filtro
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}
// vc inclui nova propriedade no vetor exemplo o nameSize
function doForEach() {
  const mappedPeople = doMap();
  //  sem utilizar a função doMap()
  // const mappedPeople = people.results.map((item) => {
  //   return { name: item.name };
  // });
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}
// no reduce vc consegue fazer calculos no objetos ;
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  // tirando a prova com for
  // let soma = 0
  // for (let index = 0; index < people.results.length; index++) {
  //   const element = people.results[index];
  //   soma += element.dob.age
  // }
  // console.log(soma);
  console.log(totalAges);
}
// tras o elemento dentro do array para vc se existir!
function doFind() {
  const found = people.results.find((person) => person.name.first === "Nara");
  console.log(found);
}
// se tive o elemento dentro array ele tras como true senão tras false
function doSome() {
  const found = people.results.some((person) => person.name.first === "Nara");
  const found2 = people.results.some((person) => person.name.first === "Na");
  console.log(found);
  console.log(found2);
}
// esse metodo é parecido com some() só que ele vê todos elementos.
function doEvery() {
  const every = people.results.every((persons) => persons.nat === "BR");
  console.log(every);
}
// o sort serve pra ordenar com padrão string com número precisa implementar a logica
function doSort() {
  const mappedNames = people.results
    .map((person) => person.name.first)
    .filter((person) => person.startsWith("A"))
    .sort((a, b) => a.length - b.length);
  //  maneira de fazer comparação com a propriedade localeCompare
  // .sort((a, b) => {
  //   return a.localeCompare(b);
  // });
  console.log(mappedNames);
}
// usar os spread ele espalha e depois ajuntar em novo array
function doSpread() {
  const marriedMan = people.results.filter(
    (person) => person.name.title === "Mr"
  );
  const marriedWoman = people.results.filter(
    (person) => person.name.title === "Ms"
  );
  const marriePeople = [...marriedMan, ...marriedWoman, { msg: "oi" }];
  console.log(marriePeople);
}
// pega os valores e agrupa em uma arrayparecido com spread
function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(23, 20, 10));
  console.log(infiniteSum(4, 120, 100));
  console.log(infiniteSum(5, 100, 100, 2000, 300, 4, 5));
}
function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// vc consegue deixa o codigo mais cloud
function doDestructuring() {
  const first = people.results[0];
  //  repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // usando destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
