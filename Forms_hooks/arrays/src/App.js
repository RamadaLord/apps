const objetos = [
  { id: 1, nome: "Peterson", idade: 29, cargo: "Programador" },
  { id: 2, nome: "Gabriel", idade: 17, cargo: "Programador" },
  { id: 3, nome: "Josefino", idade: 900000, cargo: "anciao" },
];

const nomes = objetos.map((item) => item.nome);
const cargos = objetos.map((item) => item.cargo);
const idades = objetos.map((item) => item.idade);
const ids = objetos.map((item) => item.id);

console.log(ids, nomes, cargos, idades);
