// const person = {
//   name: "leandro",
//   age: '28',
//   location: {
//     city: "Gama City",
//     temp: 21,
//   }
// }
//
// // const age = person.age;
// // const name = person.name;
//
// const { name, age } = person;
// console.log(`${name} is ${age}`);
//
// const {temp: temperature, address: add = "setor leste"} = person.location;
//
// console.log(`calor: ${temperature} no ${add}`);
//
//
// const book = {
//   title: 'Ego is te enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = "Self"} = book.publisher;
//
// console.log(publisherName);

// const address =  ['Lote 110', 'Gama', 'DF', '723450030']
// const [ , city, state = 'goias'] = address;
// console.log(`Voce esta em ${city}, ${state}`);

const item = ['cafe', 'R$ 2,00', 'R$ 4,00', 'R$ 5,00'];
const [title, , m] = item;
console.log(`um ${title} medio custa ${m}`);
